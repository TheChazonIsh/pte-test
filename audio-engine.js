/**
 * PTE Master Multi-Accent & Universal Mobile Recording Audio Engine (v11.6 iOS & Earphone Robust Edition)
 * 1. US(미국), UK(영국), AU(호주) 원어민 발음 및 속도 제어
 * 2. iOS Safari SpeechSynthesis GC(가비지 컬렉션) 버그 및 무한 멈춤(Hang) 방지 자동 타이머 탑재
 * 3. iOS Safari(audio/mp4) & Android/PC(audio/webm) 자동 호환 녹음기 생성
 * 4. 원어민 발음 vs 내 녹음 목소리 1:1 연속 비교 재생기
 */

const PTE_AUDIO = {
  currentAccent: localStorage.getItem('pte_preferred_accent') || 'en-US',
  lastRecordedBlobUrl: null,
  lastRecordedMimeType: 'audio/mp4',
  activeUtterance: null, // iOS 가비지 컬렉션으로 인한 음성 중단 방지 참조 보존
  safetyTimer: null,

  accents: {
    'en-US': { label: '🇺🇸 US (미국)', lang: 'en-US' },
    'en-GB': { label: '🇬🇧 UK (영국)', lang: 'en-GB' },
    'en-AU': { label: '🇦🇺 AU (호주)', lang: 'en-AU' }
  },

  setAccent(accentKey) {
    if (this.accents[accentKey]) {
      this.currentAccent = accentKey;
      localStorage.setItem('pte_preferred_accent', accentKey);
    }
  },

  getVoice() {
    if (!window.speechSynthesis) return null;
    const voices = window.speechSynthesis.getVoices() || [];
    const targetLang = this.currentAccent;
    let match = voices.find(v => v.lang === targetLang || v.lang.replace('_', '-') === targetLang);
    if (!match) {
      const code = targetLang.split('-')[1];
      match = voices.find(v => v.lang.includes(code));
    }
    if (!match) {
      match = voices.find(v => v.lang.startsWith('en'));
    }
    return match || null;
  },

  speak(text, onEndCallback, rate = 0.95) {
    if (!text || typeof text !== 'string') {
      if (onEndCallback) onEndCallback();
      return;
    }

    if (!window.speechSynthesis) {
      if (onEndCallback) onEndCallback();
      return;
    }

    // iOS 사파리 멈춤 방지: 이전 음성 및 안전 타이머 취소 후 강제 resume
    if (this.safetyTimer) {
      clearTimeout(this.safetyTimer);
      this.safetyTimer = null;
    }
    try {
      window.speechSynthesis.cancel();
      if (window.speechSynthesis.paused) {
        window.speechSynthesis.resume();
      }
    } catch (e) {}

    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = this.currentAccent;
    utterance.rate = rate;

    const voice = this.getVoice();
    if (voice) utterance.voice = voice;

    let hasEnded = false;
    const finish = () => {
      if (hasEnded) return;
      hasEnded = true;
      if (this.safetyTimer) {
        clearTimeout(this.safetyTimer);
        this.safetyTimer = null;
      }
      this.activeUtterance = null;
      if (onEndCallback) onEndCallback();
    };

    utterance.onend = finish;
    utterance.onerror = (e) => {
      console.warn("SpeechSynthesis error:", e);
      finish();
    };

    // [핵심 안전장치] iOS 사파리가 블루투스 이어폰 연결, 무음 모드 등으로 음성 이벤트를 먹통으로 만들었을 때
    // 글자 수 기반 예상 시간(단어당 약 0.35초 + 여유 1.5초)이 지나면 무한 로딩에 갇히지 않고 무조건 다음 단계(녹음)로 자동 탈출!
    const wordCount = text.trim().split(/\s+/).length;
    const expectedMs = Math.max(3500, Math.round((wordCount / (rate * 2.2)) * 1000) + 1500);
    this.safetyTimer = setTimeout(() => {
      if (!hasEnded) {
        console.warn("Safety timer triggered: Speech synthesis took too long or was muted by OS.");
        finish();
      }
    }, expectedMs);

    this.activeUtterance = utterance;

    try {
      window.speechSynthesis.speak(utterance);
      // 사파리 특유의 큐 잠김 해제
      if (window.speechSynthesis.paused) {
        window.speechSynthesis.resume();
      }
    } catch (err) {
      console.error("speak call failed:", err);
      finish();
    }
  },

  stopSpeak() {
    if (this.safetyTimer) {
      clearTimeout(this.safetyTimer);
      this.safetyTimer = null;
    }
    this.activeUtterance = null;
    if (window.speechSynthesis) {
      try { window.speechSynthesis.cancel(); } catch (e) {}
    }
  },

  getSupportedAudioMimeType() {
    if (typeof MediaRecorder === 'undefined') return '';
    const candidates = [
      'audio/mp4',
      'audio/webm;codecs=opus',
      'audio/webm',
      'audio/ogg;codecs=opus',
      'audio/aac'
    ];
    for (const mime of candidates) {
      try {
        if (typeof MediaRecorder.isTypeSupported === 'function' && MediaRecorder.isTypeSupported(mime)) {
          return mime;
        }
      } catch (e) {}
    }
    return '';
  },

  createCompatibleMediaRecorder(stream, onStopCallback) {
    const mimeType = this.getSupportedAudioMimeType();
    let recorder;
    try {
      recorder = mimeType ? new MediaRecorder(stream, { mimeType }) : new MediaRecorder(stream);
    } catch (e) {
      recorder = new MediaRecorder(stream);
    }

    const chunks = [];
    recorder.ondataavailable = (e) => {
      if (e.data && e.data.size > 0) chunks.push(e.data);
    };
    recorder.onstop = () => {
      const actualType = recorder.mimeType || mimeType || 'audio/mp4';
      const blob = new Blob(chunks, { type: actualType });
      if (this.lastRecordedBlobUrl) {
        try { URL.revokeObjectURL(this.lastRecordedBlobUrl); } catch (e) {}
      }
      const url = URL.createObjectURL(blob);
      this.lastRecordedBlobUrl = url;
      this.lastRecordedMimeType = actualType;
      if (onStopCallback) onStopCallback(url, blob, actualType);
    };
    return recorder;
  },

  playBeep() {
    try {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      if (!AudioCtx) return;
      const audioCtx = new AudioCtx();
      const osc = audioCtx.createOscillator();
      const gain = audioCtx.createGain();

      osc.type = "sine";
      osc.frequency.setValueAtTime(1000, audioCtx.currentTime);
      gain.gain.setValueAtTime(0.25, audioCtx.currentTime);

      osc.connect(gain);
      gain.connect(audioCtx.destination);

      osc.start();
      osc.stop(audioCtx.currentTime + 0.35);
    } catch (e) {}
  }
};

if (typeof window !== 'undefined' && window.speechSynthesis) {
  window.speechSynthesis.onvoiceschanged = () => {
    PTE_AUDIO.getVoice();
  };
}

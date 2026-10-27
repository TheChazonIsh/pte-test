/**
 * PTE Master Multi-Accent & Universal Mobile Recording Audio Engine (v11.0)
 * 1. US(미국), UK(영국), AU(호주) 원어민 발음 및 속도 제어
 * 2. iOS Safari(audio/mp4) & Android/PC(audio/webm) 자동 호환 녹음기 생성
 * 3. 원어민 발음 vs 내 녹음 목소리 1:1 연속 비교 재생기
 */

const PTE_AUDIO = {
  currentAccent: localStorage.getItem('pte_preferred_accent') || 'en-US',
  lastRecordedBlobUrl: null,
  lastRecordedMimeType: 'audio/mp4',

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
    const voices = window.speechSynthesis.getVoices();
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
    if (!window.speechSynthesis) {
      if (onEndCallback) onEndCallback();
      return;
    }
    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = this.currentAccent;
    utterance.rate = rate;

    const voice = this.getVoice();
    if (voice) utterance.voice = voice;

    if (onEndCallback) utterance.onend = onEndCallback;
    utterance.onerror = () => {
      if (onEndCallback) onEndCallback();
    };
    window.speechSynthesis.speak(utterance);
  },

  stopSpeak() {
    if (window.speechSynthesis) {
      window.speechSynthesis.cancel();
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

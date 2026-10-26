/**
 * PTE Master Multi-Accent Audio Engine
 * US(미국), UK(영국), AU(호주) 원어민 발음 및 시험 비프음 제어
 */

const PTE_AUDIO = {
  currentAccent: localStorage.getItem('pte_preferred_accent') || 'en-US',

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
    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = this.currentAccent;
    utterance.rate = rate;

    const voice = this.getVoice();
    if (voice) utterance.voice = voice;

    if (onEndCallback) utterance.onend = onEndCallback;
    window.speechSynthesis.speak(utterance);
  },

  playBeep() {
    const audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    const osc = audioCtx.createOscillator();
    const gain = audioCtx.createGain();

    osc.type = "sine";
    osc.frequency.setValueAtTime(1000, audioCtx.currentTime);
    gain.gain.setValueAtTime(0.3, audioCtx.currentTime);

    osc.connect(gain);
    gain.connect(audioCtx.destination);

    osc.start();
    osc.stop(audioCtx.currentTime + 0.4);
  }
};

if (typeof window !== 'undefined' && window.speechSynthesis) {
  window.speechSynthesis.onvoiceschanged = () => {
    PTE_AUDIO.getVoice();
  };
}

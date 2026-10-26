/**
 * PTE Master AI v5.0 - Universal UX/UI Enhancer Engine
 * 1. 실제 Pearson Vue 시험장 스킨 모드 (Exam Skin Switcher)
 * 2. 실시간 마이크 음량 파형(Audio Waveform) 시각화기
 * 3. 다크 모드(Dark Mode) 및 지문 글자 크기(A- / A / A+) 조절기
 * 4. 모바일 전용 하단 고정 컨트롤 바 (Sticky Bottom Bar)
 */

(function() {
  const STATE = {
    darkMode: localStorage.getItem('pte_dark_mode') === 'true',
    pearsonSkin: localStorage.getItem('pte_pearson_skin') === 'true',
    fontScale: parseFloat(localStorage.getItem('pte_font_scale') || '1.0'),
    threeSecRule: localStorage.getItem('pte_3sec_rule') === 'true'
  };

  // 공통 스타일 주입 (다크모드, 피어슨 시험장 스킨, 오디오 파형, 모바일 하단 고정바)
  const styleEl = document.createElement('style');
  styleEl.innerHTML = `
    /* 상단 UX 컨트롤 툴바 */
    .ux-control-bar {
      background: #f8fafc;
      border-bottom: 1px solid #e2e8f0;
      padding: 6px 24px;
      display: flex;
      justify-content: flex-end;
      align-items: center;
      gap: 10px;
      font-size: 12px;
      flex-wrap: wrap;
    }
    .ux-btn {
      padding: 4px 10px;
      border-radius: 6px;
      border: 1px solid #cbd5e1;
      background: #ffffff;
      color: #334155;
      font-size: 11px;
      font-weight: 700;
      cursor: pointer;
      transition: all 0.15s;
    }
    .ux-btn:hover { background: #eff6ff; border-color: #93c5fd; }
    .ux-btn.active { background: #1e3a8a; color: #ffffff; border-color: #1e3a8a; }

    /* 1. 실제 Pearson Vue 시험장 스킨 모드 */
    body.pearson-skin {
      font-family: Arial, "Helvetica Neue", Calibri, sans-serif !important;
      background-color: #d9e1e8 !important;
    }
    body.pearson-skin .top-bar,
    body.pearson-skin .navbar {
      background: #003057 !important;
      color: #ffffff !important;
      border-bottom: 3px solid #f59e0b !important;
    }
    body.pearson-skin .top-bar .back-link,
    body.pearson-skin .navbar .logo {
      color: #ffffff !important;
    }
    body.pearson-skin .pte-container,
    body.pearson-skin .test-card {
      border-radius: 0px !important;
      border: 2px solid #003057 !important;
      border-top: 8px solid #003057 !important;
      box-shadow: none !important;
      max-width: 900px !important;
    }

    /* 2. 실시간 마이크 음성 파형 (Waveform) 박스 */
    .waveform-widget {
      display: none;
      align-items: center;
      justify-content: space-between;
      background: #0f172a;
      color: #f8fafc;
      padding: 10px 16px;
      border-radius: 8px;
      margin-bottom: 16px;
      gap: 14px;
    }
    .waveform-Widget-left {
      display: flex;
      align-items: center;
      gap: 8px;
      font-size: 12px;
      font-weight: 700;
    }
    .rec-dot {
      width: 10px;
      height: 10px;
      background: #ef4444;
      border-radius: 50%;
      animation: pulseRec 1s infinite;
    }
    @keyframes pulseRec {
      0% { opacity: 1; transform: scale(1); }
      50% { opacity: 0.4; transform: scale(1.2); }
      100% { opacity: 1; transform: scale(1); }
    }
    .waveform-bars {
      display: flex;
      align-items: flex-end;
      gap: 3px;
      height: 28px;
      flex: 1;
      max-width: 260px;
    }
    .wf-bar {
      flex: 1;
      background: #38bdf8;
      height: 4px;
      border-radius: 2px;
      transition: height 0.06s ease;
    }
    .vol-status-tag {
      font-size: 11px;
      font-weight: 700;
      padding: 3px 8px;
      border-radius: 4px;
      background: #1e293b;
      color: #38bdf8;
    }

    /* 3. 다크 모드 (Dark Mode) */
    body.dark-mode {
      background-color: #0f172a !important;
      color: #e2e8f0 !important;
    }
    body.dark-mode .navbar,
    body.dark-mode .top-bar,
    body.dark-mode .ux-control-bar,
    body.dark-mode .pte-container,
    body.dark-mode .test-card,
    body.dark-mode .panel,
    body.dark-mode .card,
    body.dark-mode .target-card,
    body.dark-mode .history-card,
    body.dark-mode .score-card,
    body.dark-mode .cheat-card,
    body.dark-mode .mistake-card,
    body.dark-mode .form-card,
    body.dark-mode .custom-list-card,
    body.dark-mode .count-card,
    body.dark-mode footer {
      background-color: #1e293b !important;
      color: #f1f5f9 !important;
      border-color: #334155 !important;
    }
    body.dark-mode .question-box,
    body.dark-mode .passage-box,
    body.dark-mode .content-box,
    body.dark-mode .audio-status-box,
    body.dark-mode .audio-box,
    body.dark-mode .status-panel,
    body.dark-mode .stat-box,
    body.dark-mode .score-box,
    body.dark-mode .analysis-box,
    body.dark-mode .analysis-details,
    body.dark-mode .transcript-box,
    body.dark-mode .diff-display,
    body.dark-mode .explanation-list,
    body.dark-mode .image-container,
    body.dark-mode .audio-settings-bar,
    body.dark-mode textarea,
    body.dark-mode input[type="text"],
    body.dark-mode select {
      background-color: #0f172a !important;
      color: #f8fafc !important;
      border-color: #475569 !important;
    }
    body.dark-mode h1, body.dark-mode h2, body.dark-mode h3, body.dark-mode h4,
    body.dark-mode .stat-box .v, body.dark-mode .score-box .val,
    body.dark-mode .pte-header h2, body.dark-mode .chart-title {
      color: #f8fafc !important;
    }
    body.dark-mode p, body.dark-mode .status-title, body.dark-mode td {
      color: #cbd5e1 !important;
    }

    /* 4. 스마트폰 전용 하단 고정 컨트롤 바 (Sticky Bottom Action Bar) */
    @media (max-width: 640px) {
      .wrapper { padding: 16px 10px 85px 10px !important; }
      .pte-container, .test-card { padding: 20px 16px !important; }
      .btn-group {
        position: fixed !important;
        bottom: 0 !important;
        left: 0 !important;
        right: 0 !important;
        background: rgba(255, 255, 255, 0.96) !important;
        backdrop-filter: blur(8px);
        padding: 12px 16px !important;
        border-top: 1px solid #cbd5e1 !important;
        z-index: 999 !important;
        justify-content: space-around !important;
        box-shadow: 0 -4px 12px rgba(0, 0, 0, 0.08) !important;
      }
      body.dark-mode .btn-group {
        background: rgba(30, 41, 59, 0.96) !important;
        border-top-color: #334155 !important;
      }
      .btn-group .btn { flex: 1; padding: 12px 10px !important; font-size: 14px !important; }
    }
  `;
  document.head.appendChild(styleEl);

  function applyVisualPreferences() {
    if (STATE.darkMode) document.body.classList.add('dark-mode');
    else document.body.classList.remove('dark-mode');

    if (STATE.pearsonSkin) document.body.classList.add('pearson-skin');
    else document.body.classList.remove('pearson-skin');

    const textContainers = document.querySelectorAll('.question-box, .passage-box, .prompt-box, .content-box, .essay-textarea, .input-box');
    textContainers.forEach(el => {
      el.style.fontSize = `${Math.round(18 * STATE.fontScale)}px`;
    });

    const btnDark = document.getElementById('ux-btn-dark');
    if (btnDark) {
      btnDark.className = 'ux-btn' + (STATE.darkMode ? ' active' : '');
      btnDark.innerText = STATE.darkMode ? '☀️ 라이트 모드' : '🌙 다크 모드';
    }
    const btnSkin = document.getElementById('ux-btn-skin');
    if (btnSkin) {
      btnSkin.className = 'ux-btn' + (STATE.pearsonSkin ? ' active' : '');
      btnSkin.innerText = STATE.pearsonSkin ? '🖥️ 실전 시험장 스킨 ON' : '🖥️ 실전 시험장 스킨';
    }
    const btn3sec = document.getElementById('ux-btn-3sec');
    if (btn3sec) {
      btn3sec.className = 'ux-btn' + (STATE.threeSecRule ? ' active' : '');
      btn3sec.innerText = STATE.threeSecRule ? '⏱️ 3초 무음 룰 ON' : '⏱️ 3초 무음 룰 OFF';
    }
  }

  function injectToolbar() {
    const header = document.querySelector('.top-bar, .navbar');
    if (!header) return;

    const bar = document.createElement('div');
    bar.className = 'ux-control-bar';
    bar.innerHTML = `
      <span style="color: #64748b; font-weight: 700; margin-right: auto;">✨ v5.0 UX/UI 컨트롤러</span>
      <button type="button" class="ux-btn" id="ux-btn-3sec" title="스피킹 녹음 시작 후 3초 무음 시 시험처럼 마이크 자동 종료">⏱️ 3초 무음 룰 OFF</button>
      <button type="button" class="ux-btn" id="ux-btn-skin" title="실제 피어슨 시험장 화면 스타일로 전환">🖥️ 실전 시험장 스킨</button>
      <button type="button" class="ux-btn" id="ux-btn-dark" title="눈 피로 방지 다크 모드 전환">🌙 다크 모드</button>
      <div style="display: flex; gap: 4px; align-items: center;">
        <button type="button" class="ux-btn" id="ux-font-down" title="글자 작게">A-</button>
        <button type="button" class="ux-btn" id="ux-font-reset" title="기본 크기">A</button>
        <button type="button" class="ux-btn" id="ux-font-up" title="글자 크게">A+</button>
      </div>
    `;
    header.insertAdjacentElement('afterend', bar);

    const btn3secEl = document.getElementById('ux-btn-3sec');
    if (btn3secEl) {
      btn3secEl.onclick = () => {
        STATE.threeSecRule = !STATE.threeSecRule;
        localStorage.setItem('pte_3sec_rule', STATE.threeSecRule);
        applyVisualPreferences();
      };
    }

    document.getElementById('ux-btn-dark').onclick = () => {
      STATE.darkMode = !STATE.darkMode;
      localStorage.setItem('pte_dark_mode', STATE.darkMode);
      applyVisualPreferences();
    };

    document.getElementById('ux-btn-skin').onclick = () => {
      STATE.pearsonSkin = !STATE.pearsonSkin;
      localStorage.setItem('pte_pearson_skin', STATE.pearsonSkin);
      applyVisualPreferences();
    };

    document.getElementById('ux-font-down').onclick = () => {
      STATE.fontScale = Math.max(0.8, +(STATE.fontScale - 0.1).toFixed(1));
      localStorage.setItem('pte_font_scale', STATE.fontScale);
      applyVisualPreferences();
    };
    document.getElementById('ux-font-reset').onclick = () => {
      STATE.fontScale = 1.0;
      localStorage.setItem('pte_font_scale', STATE.fontScale);
      applyVisualPreferences();
    };
    document.getElementById('ux-font-up').onclick = () => {
      STATE.fontScale = Math.min(1.4, +(STATE.fontScale + 0.1).toFixed(1));
      localStorage.setItem('pte_font_scale', STATE.fontScale);
      applyVisualPreferences();
    };
  }

  // 실시간 마이크 음량 파형(Waveform) 시각화 엔진
  function setupLiveWaveformVisualizer() {
    const statusPanel = document.querySelector('.status-panel');
    if (!statusPanel || !navigator.mediaDevices) return;

    const wfWidget = document.createElement('div');
    wfWidget.className = 'waveform-widget';
    wfWidget.id = 'live-waveform-widget';

    let barsHtml = '';
    for (let i = 0; i < 20; i++) {
      barsHtml += `<div class="wf-bar" id="wf-bar-${i}"></div>`;
    }

    wfWidget.innerHTML = `
      <div class="waveform-Widget-left">
        <span class="rec-dot"></span>
        <span>MIC LIVE</span>
      </div>
      <div class="waveform-bars">${barsHtml}</div>
      <span class="vol-status-tag" id="wf-vol-tag">음성 대기 중</span>
    `;
    statusPanel.insertAdjacentElement('afterend', wfWidget);

    // getUserMedia 후킹하여 마이크 활성화 시 자동으로 실시간 스펙트럼 파형 구동
    const origGetUserMedia = navigator.mediaDevices.getUserMedia.bind(navigator.mediaDevices);
    let animId = null;
    let audioCtx = null;

    navigator.mediaDevices.getUserMedia = async function(constraints) {
      const stream = await origGetUserMedia(constraints);
      if (constraints && constraints.audio) {
        try {
          if (animId) cancelAnimationFrame(animId);
          if (audioCtx) { try { audioCtx.close(); } catch(e){} }

          audioCtx = new (window.AudioContext || window.webkitAudioContext)();
          const source = audioCtx.createMediaStreamSource(stream);
          const analyser = audioCtx.createAnalyser();
          analyser.fftSize = 64;
          source.connect(analyser);

          const dataArray = new Uint8Array(analyser.frequencyBinCount);
          wfWidget.style.display = 'flex';
          const volTag = document.getElementById('wf-vol-tag');
          let silenceSeconds = 0;
          let hasSpokenEver = false;
          let silenceInterval = null;

          if (STATE.threeSecRule) {
            silenceInterval = setInterval(() => {
              if (!hasSpokenEver) {
                silenceSeconds++;
                if (silenceSeconds >= 3) {
                  clearInterval(silenceInterval);
                  const stopBtn = document.getElementById('finish-btn') || document.getElementById('stop-btn');
                  if (stopBtn && stopBtn.style.display !== 'none') {
                    alert('⚠️ [PTE 3초 무음 룰 발동!]\n녹음 시작 후 3초간 소리가 감지되지 않아 실제 시험장 시스템처럼 녹음이 자동 종료되었습니다.');
                    stopBtn.click();
                  }
                }
              } else {
                clearInterval(silenceInterval);
              }
            }, 1000);
          }

          function renderFrame() {
            const tracks = stream.getAudioTracks();
            if (!tracks.length || tracks[0].readyState === 'ended') {
              wfWidget.style.display = 'none';
              return;
            }
            analyser.getByteFrequencyData(dataArray);
            let sum = 0;
            for (let i = 0; i < 20; i++) {
              const val = dataArray[i] || 0;
              sum += val;
              const h = Math.max(4, Math.min(28, Math.round((val / 255) * 28)));
              const barEl = document.getElementById(`wf-bar-${i}`);
              if (barEl) {
                barEl.style.height = `${h}px`;
                barEl.style.background = val > 140 ? '#10b981' : (val > 40 ? '#38bdf8' : '#475569');
              }
            }
            const avg = sum / 20;
            if (avg > 35) {
              hasSpokenEver = true;
            }
            if (volTag) {
              if (avg > 45) {
                volTag.innerText = '✔ 적정 성량 입력 중';
                volTag.style.color = '#4ade80';
              } else if (avg > 12) {
                volTag.innerText = '조금 더 크게 말하세요';
                volTag.style.color = '#facc15';
              } else {
                volTag.innerText = '무음 감지 중...';
                volTag.style.color = '#94a3b8';
              }
            }
            animId = requestAnimationFrame(renderFrame);
          }
          renderFrame();
        } catch (err) {
          console.warn('Waveform visualizer error:', err);
        }
      }
      return stream;
    };
  }

  window.addEventListener('DOMContentLoaded', () => {
    injectToolbar();
    applyVisualPreferences();
    setupLiveWaveformVisualizer();
  });
})();

  // 6. 원어민 vs 내 목소리 1:1 연속 비교 재생 헬퍼 (Shadowing Player)
  window.playShadowingCompare = function(nativeText, userAudioElementId = 'audio-player') {
    if (!nativeText) return;
    const userAudio = document.getElementById(userAudioElementId);
    if (typeof PTE_AUDIO !== 'undefined') {
      const toast = document.createElement('div');
      toast.id = 'shadowing-toast';
      toast.style.cssText = 'position: fixed; top: 70px; left: 50%; transform: translateX(-50%); background: #1e3a8a; color: white; padding: 10px 18px; border-radius: 8px; font-weight: 700; font-size: 13px; z-index: 9999; box-shadow: 0 4px 12px rgba(0,0,0,0.2);';
      toast.innerText = '🎧 [1단계] 원어민 표준 발음 재생 중...';
      document.body.appendChild(toast);

      PTE_AUDIO.speak(nativeText, () => {
        if (userAudio && userAudio.src) {
          toast.innerText = '🎙️ [2단계] 내가 녹음한 음성 재생 중... (비교)';
          toast.style.background = '#059669';
          userAudio.currentTime = 0;
          userAudio.play();
          userAudio.onended = () => {
            toast.remove();
          };
        } else {
          toast.remove();
        }
      });
    }
  };

  // 7. WFD / RS '단어 첫 글자(Initial) 힌트' 생성기
  window.getInitialHint = function(sentence) {
    if (!sentence) return '';
    return sentence.split(/\s+/).map(word => {
      const clean = word.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, '');
      const punct = word.replace(clean, '');
      if (clean.length <= 1) return word;
      return clean[0] + '_'.repeat(clean.length - 1) + punct;
    }).join(' ');
  };

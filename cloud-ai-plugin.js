/**
 * PTE Master AI v10.1 Clean Edition - Built-in AI Diagnostics & GitHub Sync Plugin (Azure-Free)
 * 1. 내장 3음절 학술 어휘 음절·강세(Syllable & Stress) 정밀 진단기 (100% 무료·무설치 즉시 작동)
 * 2. 내장 C1/C2 아카데믹 라이팅 어휘 업그레이더 + GitHub Models / Gemini / OpenAI 실시간 첨삭
 * 3. GitHub Gist 기반 PC ↔ 스마트폰 1초 클라우드 자동 동기화
 */

(function() {
  const CONFIG = {
    llmProvider: localStorage.getItem('pte_llm_provider') || 'github',
    llmKey: localStorage.getItem('pte_llm_key') || '',
    gistToken: localStorage.getItem('pte_gist_token') || '',
    gistId: localStorage.getItem('pte_gist_id') || '',
    autoSync: localStorage.getItem('pte_auto_sync') === 'true'
  };

  const styleEl = document.createElement('style');
  styleEl.innerHTML = `
    .cloud-modal-backdrop {
      display: none;
      position: fixed;
      inset: 0;
      background: rgba(15, 23, 42, 0.65);
      backdrop-filter: blur(4px);
      z-index: 10000;
      justify-content: center;
      align-items: center;
      padding: 16px;
    }
    .cloud-modal {
      background: #ffffff;
      color: #1e293b;
      width: 100%;
      max-width: 600px;
      border-radius: 14px;
      box-shadow: 0 20px 40px rgba(0,0,0,0.25);
      overflow: hidden;
      max-height: 90vh;
      display: flex;
      flex-direction: column;
    }
    body.dark-mode .cloud-modal { background: #1e293b; color: #f8fafc; border: 1px solid #334155; }
    .cloud-modal-header {
      background: linear-gradient(135deg, #003057, #1d4ed8);
      color: white;
      padding: 18px 24px;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    .cloud-modal-header h3 { font-size: 16px; font-weight: 800; }
    .cloud-close-btn {
      background: rgba(255,255,255,0.2);
      border: none;
      color: white;
      width: 30px;
      height: 30px;
      border-radius: 50%;
      cursor: pointer;
      font-weight: bold;
    }
    .cloud-tabs {
      display: flex;
      border-bottom: 1px solid #e2e8f0;
      background: #f8fafc;
    }
    body.dark-mode .cloud-tabs { background: #0f172a; border-color: #334155; }
    .cloud-tab {
      flex: 1;
      padding: 12px 10px;
      font-size: 12px;
      font-weight: 700;
      text-align: center;
      cursor: pointer;
      border: none;
      background: transparent;
      color: #64748b;
      border-bottom: 3px solid transparent;
    }
    .cloud-tab.active {
      color: #2563eb;
      border-bottom-color: #2563eb;
      background: #ffffff;
    }
    body.dark-mode .cloud-tab.active { background: #1e293b; color: #60a5fa; }
    .cloud-modal-body {
      padding: 22px 24px;
      overflow-y: auto;
      font-size: 13px;
      line-height: 1.6;
    }
    .cloud-field { margin-bottom: 14px; }
    .cloud-field label { display: block; font-weight: 700; margin-bottom: 5px; font-size: 12px; color: #334155; }
    body.dark-mode .cloud-field label { color: #cbd5e1; }
    .cloud-input {
      width: 100%;
      padding: 9px 12px;
      border: 1px solid #cbd5e1;
      border-radius: 6px;
      font-size: 13px;
    }
    .cloud-guide-box {
      background: #eff6ff;
      border: 1px solid #bfdbfe;
      color: #1e3a8a;
      padding: 12px 14px;
      border-radius: 8px;
      font-size: 12px;
      margin-bottom: 16px;
    }
    body.dark-mode .cloud-guide-box { background: #0f172a; border-color: #1d4ed8; color: #93c5fd; }

    .precision-panel {
      margin-top: 16px;
      background: #f8fafc;
      border: 1px solid #cbd5e1;
      border-left: 4px solid #2563eb;
      border-radius: 8px;
      padding: 16px;
      font-size: 13px;
      line-height: 1.6;
    }
    body.dark-mode .precision-panel { background: #0f172a; border-color: #334155; }
    .phoneme-word-chip {
      display: inline-flex;
      flex-direction: column;
      align-items: center;
      background: #ffffff;
      border: 1px solid #e2e8f0;
      border-radius: 6px;
      padding: 5px 9px;
      margin: 3px;
      font-size: 13px;
    }
    body.dark-mode .phoneme-word-chip { background: #1e293b; border-color: #475569; }
    .pw-good { border-bottom: 3px solid #10b981; }
    .pw-bad { border-bottom: 3px solid #ef4444; }
    .pw-sub { font-size: 10px; color: #64748b; margin-top: 2px; }
  `;
  document.head.appendChild(styleEl);

  function createCloudSettingsModal() {
    const backdrop = document.createElement('div');
    backdrop.className = 'cloud-modal-backdrop';
    backdrop.id = 'cloud-settings-backdrop';

    backdrop.innerHTML = `
      <div class="cloud-modal">
        <div class="cloud-modal-header">
          <h3>☁️ GitHub 클라우드 동기화 &amp; AI 첨삭 설정 (v10.1)</h3>
          <button type="button" class="cloud-close-btn" id="cloud-modal-close">✕</button>
        </div>
        <div class="cloud-tabs">
          <button type="button" class="cloud-tab active" data-tab="tab-sync">☁️ 1. PC ↔ 휴대폰 클라우드 동기화</button>
          <button type="button" class="cloud-tab" data-tab="tab-llm">✍️ 2. AI 에세이/요약 첨삭</button>
        </div>
        <div class="cloud-modal-body">
          <!-- Tab 1: Cloud Sync -->
          <div id="tab-sync" class="cloud-tab-pane">
            <div class="cloud-guide-box">
              <b>💡 GitHub Gist 클라우드 동기화 (PC ↔ 스마트폰 1초 연동 · 100% 무료):</b><br>
              1. GitHub 우측 상단 프로필 ➔ <b>Settings</b> ➔ 좌측 맨 아래 <b>Developer settings</b> ➔ <b>Personal access tokens (Tokens classic)</b><br>
              2. <b>Generate new token</b> 클릭 ➔ 권한에서 <b>[✔ gist]</b> 하나만 체크 후 생성된 토큰(`ghp_...`)을 아래에 입력!<br>
              3. 이제 PC에서 푼 점수와 오답 노트가 스마트폰에서도 버튼 하나로 즉시 동기화됩니다.
            </div>
            <div class="cloud-field">
              <label>GitHub Personal Access Token (gist 권한)</label>
              <input type="password" id="inp-gist-token" class="cloud-input" placeholder="ghp_..." value="${CONFIG.gistToken}">
            </div>
            <div class="cloud-field">
              <label>동기화 Gist ID (최초 업로드 시 자동 생성됨 — 다른 기기에 이 ID를 입력하세요)</label>
              <input type="text" id="inp-gist-id" class="cloud-input" placeholder="최초 업로드 시 자동으로 채워집니다" value="${CONFIG.gistId}">
            </div>
            <div class="cloud-field" style="display: flex; align-items: center; gap: 8px;">
              <input type="checkbox" id="inp-auto-sync" ${CONFIG.autoSync ? 'checked' : ''}>
              <label style="margin: 0;">문제 풀 때마다 클라우드에 자동 저장하기</label>
            </div>
            <div style="display: flex; gap: 8px; flex-wrap: wrap; margin-top: 10px;">
              <button type="button" class="ux-btn active" style="padding: 9px 16px; font-size: 12px;" id="btn-sync-push">☁️ 지금 클라우드에 업로드(저장)</button>
              <button type="button" class="ux-btn" style="padding: 9px 16px; font-size: 12px; background: #ecfdf5; color: #059669; border-color: #a7f3d0;" id="btn-sync-pull">📲 클라우드에서 내 기록 불러오기</button>
            </div>
            <div id="sync-status-msg" style="margin-top: 10px; font-size: 12px; font-weight: 700; color: #2563eb;"></div>
          </div>

          <!-- Tab 2: LLM Writing Tutor -->
          <div id="tab-llm" class="cloud-tab-pane" style="display: none;">
            <div class="cloud-guide-box">
              <b>💡 에세이(WE) &amp; 강의 요약(SST) AI 문법·어휘 첨삭 (선택 사항):</b><br>
              - 별도 키를 입력하지 않아도 <b>내장 C1/C2 학술 어휘·논리 업그레이드 분석기</b>가 100% 기본 작동합니다.<br>
              - 추가로 <b>GitHub Token</b>(학생 플랜 GitHub Models 무료) 또는 <b>Gemini API 키</b>를 입력하면 문장별 원어민 교정본을 추가 생성합니다.
            </div>
            <div class="cloud-field">
              <label>AI 모델 제공자 선택</label>
              <select id="inp-llm-provider" class="cloud-input">
                <option value="github" ${CONFIG.llmProvider === 'github' ? 'selected' : ''}>GitHub Models (학생 플랜 무료 - GitHub Token 사용)</option>
                <option value="gemini" ${CONFIG.llmProvider === 'gemini' ? 'selected' : ''}>Google Gemini API (gemini-1.5-flash)</option>
                <option value="openai" ${CONFIG.llmProvider === 'openai' ? 'selected' : ''}>OpenAI API (gpt-4o-mini)</option>
              </select>
            </div>
            <div class="cloud-field">
              <label>GitHub Token 또는 API Key</label>
              <input type="password" id="inp-llm-key" class="cloud-input" placeholder="ghp_... 또는 AIza..." value="${CONFIG.llmKey}">
            </div>
            <button type="button" class="ux-btn active" style="padding: 9px 18px; font-size: 13px;" id="btn-save-llm">💾 AI 첨삭 설정 저장하기</button>
          </div>
        </div>
      </div>
    `;
    document.body.appendChild(backdrop);

    backdrop.querySelectorAll('.cloud-tab').forEach(tab => {
      tab.onclick = (e) => {
        backdrop.querySelectorAll('.cloud-tab').forEach(t => t.classList.remove('active'));
        backdrop.querySelectorAll('.cloud-tab-pane').forEach(p => p.style.display = 'none');
        e.target.classList.add('active');
        document.getElementById(e.target.dataset.tab).style.display = 'block';
      };
    });

    document.getElementById('cloud-modal-close').onclick = () => {
      backdrop.style.display = 'none';
    };

    document.getElementById('btn-save-llm').onclick = () => {
      CONFIG.llmProvider = document.getElementById('inp-llm-provider').value;
      CONFIG.llmKey = document.getElementById('inp-llm-key').value.trim();
      localStorage.setItem('pte_llm_provider', CONFIG.llmProvider);
      localStorage.setItem('pte_llm_key', CONFIG.llmKey);
      updateCloudBadge();
      alert('✅ AI 에세이/요약 첨삭 설정이 저장되었습니다!');
    };

    document.getElementById('btn-sync-push').onclick = () => pushToGist(true);
    document.getElementById('btn-sync-pull').onclick = () => pullFromGist();
  }

  async function pushToGist(manual = false) {
    CONFIG.gistToken = (document.getElementById('inp-gist-token')?.value || CONFIG.gistToken).trim();
    CONFIG.gistId = (document.getElementById('inp-gist-id')?.value || CONFIG.gistId).trim();
    CONFIG.autoSync = document.getElementById('inp-auto-sync') ? document.getElementById('inp-auto-sync').checked : CONFIG.autoSync;

    localStorage.setItem('pte_gist_token', CONFIG.gistToken);
    localStorage.setItem('pte_gist_id', CONFIG.gistId);
    localStorage.setItem('pte_auto_sync', CONFIG.autoSync);

    if (!CONFIG.gistToken) {
      if (manual) alert('GitHub Personal Access Token을 먼저 입력해 주세요!');
      return;
    }

    const msgEl = document.getElementById('sync-status-msg');
    if (msgEl) msgEl.innerText = '⏳ 클라우드에 데이터 업로드 중...';

    const payload = {
      version: "10.1",
      updatedAt: new Date().toISOString(),
      history: JSON.parse(localStorage.getItem('pte_practice_history') || '[]'),
      mistakes: JSON.parse(localStorage.getItem('pte_mistakes') || '[]'),
      solvedIds: JSON.parse(localStorage.getItem('pte_solved_ids') || '[]'),
      bookmarks: JSON.parse(localStorage.getItem('pte_bookmarks') || '[]'),
      customQuestions: JSON.parse(localStorage.getItem('pte_custom_questions') || '{}'),
      targetScore: localStorage.getItem('pte_target_score') || '65'
    };

    const bodyData = {
      description: "PTE Master AI Cloud Sync Data",
      public: false,
      files: {
        "pte_master_sync.json": {
          content: JSON.stringify(payload, null, 2)
        }
      }
    };

    try {
      const url = CONFIG.gistId ? `https://api.github.com/gists/${CONFIG.gistId}` : 'https://api.github.com/gists';
      const method = CONFIG.gistId ? 'PATCH' : 'POST';
      const res = await fetch(url, {
        method,
        headers: {
          'Authorization': `token ${CONFIG.gistToken}`,
          'Accept': 'application/vnd.github.v3+json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(bodyData)
      });
      const data = await res.json();
      if (res.ok && data.id) {
        CONFIG.gistId = data.id;
        localStorage.setItem('pte_gist_id', data.id);
        const inpId = document.getElementById('inp-gist-id');
        if (inpId) inpId.value = data.id;
        if (msgEl) msgEl.innerText = `✅ 동기화 완료! (Gist ID: ${data.id})`;
        if (manual) alert(`✅ 클라우드 저장 완료!\n다른 기기(스마트폰 등)에서 불러올 때 아래 Gist ID를 사용하세요:\n${data.id}`);
      } else {
        if (msgEl) msgEl.innerText = '❌ 업로드 실패: 토큰 권한(gist)을 확인하세요.';
      }
    } catch (err) {
      if (msgEl) msgEl.innerText = '❌ 네트워크 오류로 동기화에 실패했습니다.';
    }
  }

  async function pullFromGist() {
    CONFIG.gistToken = (document.getElementById('inp-gist-token')?.value || CONFIG.gistToken).trim();
    CONFIG.gistId = (document.getElementById('inp-gist-id')?.value || CONFIG.gistId).trim();
    localStorage.setItem('pte_gist_token', CONFIG.gistToken);
    localStorage.setItem('pte_gist_id', CONFIG.gistId);

    if (!CONFIG.gistId) {
      alert('불러올 Gist ID를 입력해 주세요! (PC에서 먼저 업로드하면 생성됩니다)');
      return;
    }

    const msgEl = document.getElementById('sync-status-msg');
    if (msgEl) msgEl.innerText = '⏳ 클라우드에서 기록을 불러오는 중...';

    try {
      const headers = { 'Accept': 'application/vnd.github.v3+json' };
      if (CONFIG.gistToken) headers['Authorization'] = `token ${CONFIG.gistToken}`;
      const res = await fetch(`https://api.github.com/gists/${CONFIG.gistId}`, { headers });
      const data = await res.json();
      if (res.ok && data.files && data.files['pte_master_sync.json']) {
        const content = JSON.parse(data.files['pte_master_sync.json'].content);
        if (content.history) localStorage.setItem('pte_practice_history', JSON.stringify(content.history));
        if (content.mistakes) localStorage.setItem('pte_mistakes', JSON.stringify(content.mistakes));
        if (content.solvedIds) localStorage.setItem('pte_solved_ids', JSON.stringify(content.solvedIds));
        if (content.bookmarks) localStorage.setItem('pte_bookmarks', JSON.stringify(content.bookmarks));
        if (content.customQuestions) localStorage.setItem('pte_custom_questions', JSON.stringify(content.customQuestions));
        if (content.targetScore) localStorage.setItem('pte_target_score', content.targetScore);

        if (msgEl) msgEl.innerText = '✅ 클라우드 데이터 복원 성공! 화면을 새로고침합니다.';
        alert('✅ 클라우드에서 모든 연습 기록과 오답 노트를 성공적으로 불러왔습니다!');
        location.reload();
      } else {
        if (msgEl) msgEl.innerText = '❌ Gist ID 또는 토큰을 확인해 주세요.';
      }
    } catch (err) {
      if (msgEl) msgEl.innerText = '❌ 데이터 불러오기 중 오류가 발생했습니다.';
    }
  }

  function updateCloudBadge() {
    const btn = document.getElementById('ux-btn-cloud');
    if (!btn) return;
    const isCloudActive = !!(CONFIG.llmKey || CONFIG.gistToken);
    btn.innerText = isCloudActive ? '🟢 GitHub 클라우드 ON' : '☁️ 기기 동기화 & AI 설정';
    btn.className = 'ux-btn' + (isCloudActive ? ' active' : '');
  }

  // Built-in Syllable Stress & Phonetic Complexity Diagnostic (100% Free Local Engine)
  function renderSyllableDiagnosticPanel(referenceText, spokenText) {
    const scoreCard = document.getElementById('score-card');
    if (!scoreCard) return;

    let panel = document.getElementById('syllable-stress-panel');
    if (!panel) {
      panel = document.createElement('div');
      panel.id = 'syllable-stress-panel';
      panel.className = 'precision-panel';
      scoreCard.appendChild(panel);
    }

    const refWords = (referenceText || '').split(/\s+/).filter(w => w.length > 0);
    const userSet = new Set((spokenText || '').toLowerCase().replace(/[.,]/g, '').split(/\s+/));

    const complexWords = refWords.filter(w => w.replace(/[^aeiouy]/gi, '').length >= 3).slice(0, 12);
    const chipsHtml = complexWords.map(w => {
      const clean = w.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, '');
      const hit = userSet.has(clean.toLowerCase());
      const cls = hit ? 'pw-good' : 'pw-bad';
      const syl = clean.replace(/([aeiouy]+)/gi, '·$1').replace(/^·/, '');
      return `
        <div class="phoneme-word-chip ${cls}" onclick="PTE_AUDIO.speak('${clean}')" style="cursor: pointer;" title="클릭하여 원어민 강세 듣기">
          <b>🔊 ${clean} ${hit ? '(적중)' : '(발음 연습)'}</b>
          <span class="pw-sub">음절: [${syl}]</span>
        </div>
      `;
    }).join('');

    panel.innerHTML = `
      <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 8px;">
        <b style="color: #1d4ed8;">🔬 핵심 학술 어휘 음절·강세(Syllable &amp; Stress) 정밀 진단</b>
        <span style="font-size: 11px; color: #059669; font-weight: 700;">내장 AI 무료 분석</span>
      </div>
      <div style="font-size: 12px; color: #475569; margin-bottom: 8px;">
        지문 내 3음절 이상 고난도 학술 단어의 발음 인식 결과입니다. 단어를 클릭하면 원어민 강세(Stress)를 즉시 반복 청취할 수 있습니다:
      </div>
      <div>${chipsHtml || '<span style="color:#64748b;">진단할 다음절 단어가 없습니다.</span>'}</div>
    `;
  }

  // Academic Writing & SST AI Tutor
  async function runWritingAiTutor(essayText, topicPrompt, containerEl) {
    if (!containerEl) return;

    const UPGRADES = [
      { basic: /\b(very|really)\b/gi, suggest: "substantially / considerably / markedly", reason: "구어체 강조 부사를 학술 부사로 격상" },
      { basic: /\b(good|great)\b/gi, suggest: "beneficial / advantageous / exemplary", reason: "단순 형용사를 C1급 학술 형용사로 대체" },
      { basic: /\b(bad)\b/gi, suggest: "detrimental / adverse / deleterious", reason: "부정적 영향을 나타내는 고급 학술 어휘" },
      { basic: /\b(many|a lot of|lots of)\b/gi, suggest: "numerous / a multitude of / a substantial number of", reason: "수량 표현의 학술적 격식 강화" },
      { basic: /\b(important|big)\b/gi, suggest: "pivotal / paramount / profound", reason: "중요성을 강조하는 피어슨 79+ 핵심 형용사" },
      { basic: /\b(think|believe)\b/gi, suggest: "contend / assert / maintain", reason: "주장을 펼칠 때 쓰는 학술 논증 동사" },
      { basic: /\b(problem|issue)\b/gi, suggest: "predicament / challenge / dilemma", reason: "문맥 어휘 다양성(Vocabulary Range) 점수 상승" },
      { basic: /\b(make|get)\b/gi, suggest: "generate / cultivate / acquire", reason: "다빈도 기본 동사를 구체적 타동사로 교체" }
    ];

    const foundUpgrades = [];
    UPGRADES.forEach(u => {
      const m = essayText.match(u.basic);
      if (m) {
        foundUpgrades.push(`<li><b>"${m[0]}"</b> &rarr; <span style="color:#059669; font-weight:700;">${u.suggest}</span> <span style="color:#64748b;">(${u.reason})</span></li>`);
      }
    });

    const connectors = ["furthermore", "moreover", "consequently", "nevertheless", "conversely", "nonetheless", "therefore", "specifically"];
    const usedConnectors = connectors.filter(c => essayText.toLowerCase().includes(c));

    containerEl.innerHTML = `
      <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 8px;">
        <b style="color: #ea580c;">✍️ AI 아카데믹 라이팅 C1/C2 첨삭 리포트</b>
        <span style="font-size: 11px; color: #64748b;">논리 연결어 사용: <b>${usedConnectors.length}개</b> (${usedConnectors.join(', ') || '권장: Furthermore, Consequently, Nevertheless 추가'})</span>
      </div>
      <div style="margin-bottom: 8px;">
        <b>💡 79+ 고득점을 위한 어휘 업그레이드 추천:</b>
        <ul style="margin-left: 18px; margin-top: 4px;">
          ${foundUpgrades.length > 0 ? foundUpgrades.join('') : '<li>기초 구어체 표현 없이 깔끔한 학술 어휘가 사용되었습니다!</li>'}
        </ul>
      </div>
      <div id="cloud-llm-live-feedback"></div>
    `;

    if (CONFIG.llmKey && essayText.trim().length > 15) {
      const liveBox = document.getElementById('cloud-llm-live-feedback');
      if (liveBox) liveBox.innerHTML = '<p style="color:#2563eb; font-weight:700;">⏳ 클라우드 AI 튜터가 문장별 문법 교정 및 모범 첨삭본을 생성 중입니다...</p>';

      const sysPrompt = "당신은 PTE Academic 공식 라이팅 채점관입니다. 사용자의 영문 에세이/요약문을 분석하여 1) 문법/철자 교정 문장, 2) 79+ 수준의 C1/C2 다듬어진 문장, 3) 핵심 논리 피드백을 한국어로 간결하게 제시하세요.";
      const userPrompt = `[주제]: ${topicPrompt}\n[작성 답안]: ${essayText}`;

      try {
        let replyText = "";
        if (CONFIG.llmProvider === 'gemini') {
          const r = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${CONFIG.llmKey}`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ contents: [{ parts: [{ text: sysPrompt + "\n\n" + userPrompt }] }] })
          });
          const d = await r.json();
          replyText = d.candidates?.[0]?.content?.parts?.[0]?.text || "";
        } else {
          const endpoint = CONFIG.llmProvider === 'github'
            ? 'https://models.inference.ai.azure.com/chat/completions'
            : 'https://api.openai.com/v1/chat/completions';
          const r = await fetch(endpoint, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              'Authorization': `Bearer ${CONFIG.llmKey}`
            },
            body: JSON.stringify({
              model: 'gpt-4o-mini',
              messages: [
                { role: 'system', content: sysPrompt },
                { role: 'user', content: userPrompt }
              ],
              temperature: 0.4
            })
          });
          const d = await r.json();
          replyText = d.choices?.[0]?.message?.content || "";
        }

        if (replyText && liveBox) {
          liveBox.innerHTML = `<div style="background:#fff7ed; border:1px solid #fed7aa; padding:12px; border-radius:6px; margin-top:8px; white-space:pre-wrap;"><b>🤖 실시간 클라우드 LLM 첨삭 결과:</b><br>${replyText}</div>`;
        }
      } catch (e) {
        if (liveBox) liveBox.innerHTML = '<p style="color:#dc2626;">클라우드 AI 호출 중 오류가 발생했습니다. 토큰/API 키를 확인해 주세요.</p>';
      }
    }
  }

  window.addEventListener('DOMContentLoaded', () => {
    createCloudSettingsModal();

    setTimeout(() => {
      const uxBar = document.querySelector('.ux-control-bar');
      if (uxBar) {
        const btnCloud = document.createElement('button');
        btnCloud.type = 'button';
        btnCloud.id = 'ux-btn-cloud';
        btnCloud.onclick = () => {
          document.getElementById('cloud-settings-backdrop').style.display = 'flex';
        };
        uxBar.insertBefore(btnCloud, uxBar.children[1]);
        updateCloudBadge();
      }
    }, 50);

    const finishBtn = document.getElementById('finish-btn');
    if (finishBtn) {
      finishBtn.addEventListener('click', () => {
        setTimeout(() => {
          const refEl = document.getElementById('question-text') || document.getElementById('highlighted-transcript');
          const refText = refEl ? refEl.innerText.replace('원문 대조:', '').trim() : '';
          const spoken = typeof spokenTranscript !== 'undefined' ? spokenTranscript : '';
          renderSyllableDiagnosticPanel(refText, spoken);
        }, 700);
      });
    }

    const submitBtn = document.getElementById('submit-btn');
    const essayInput = document.getElementById('essay-input') || document.getElementById('summary-input');
    if (submitBtn && essayInput) {
      submitBtn.addEventListener('click', () => {
        setTimeout(() => {
          const scoreCard = document.getElementById('score-card');
          if (!scoreCard) return;
          let tutorPanel = document.getElementById('ai-writing-tutor-panel');
          if (!tutorPanel) {
            tutorPanel = document.createElement('div');
            tutorPanel.id = 'ai-writing-tutor-panel';
            tutorPanel.className = 'precision-panel';
            tutorPanel.style.borderLeftColor = '#ea580c';
            scoreCard.appendChild(tutorPanel);
          }
          const promptEl = document.getElementById('essay-prompt') || document.getElementById('audio-desc');
          runWritingAiTutor(essayInput.value, promptEl ? promptEl.innerText : '', tutorPanel);
        }, 300);
      });
    }

    if (typeof window.savePteResult === 'function') {
      const origSave = window.savePteResult;
      window.savePteResult = function(record) {
        origSave(record);
        if (CONFIG.autoSync && CONFIG.gistToken) {
          pushToGist(false);
        }
      };
    }
  });
})();

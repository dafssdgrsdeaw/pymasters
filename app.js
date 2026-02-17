// ===== PyMasters v3 - Main Application =====

// ===== STATE =====
let py = null;
let cCrs = null;    // current course
let cLi = 0;        // current lesson index
let hIdx = 0;       // hint index
let initC = '';      // initial code for reset
let checkAttempts = 0; // track check attempts for showing answer btn

// ===== PROGRESS (localStorage) =====
function gP() {
  const d = localStorage.getItem('pymasters3');
  return d ? JSON.parse(d) : { done: [], xp: 0, lv: 1, st: 0, last: null };
}
function sP(p) { localStorage.setItem('pymasters3', JSON.stringify(p)); }

// ===== XP & LEVEL SYSTEM =====
function xpFor(l) { return l * 150; }

function addXp(n) {
  const p = gP();
  const oldLv = p.lv;
  p.xp += n;
  while (p.xp >= xpFor(p.lv)) { p.xp -= xpFor(p.lv); p.lv++; }
  // Streak
  const td = new Date().toDateString();
  if (p.last !== td) {
    const y = new Date(); y.setDate(y.getDate() - 1);
    p.st = (p.last === y.toDateString()) ? p.st + 1 : 1;
    p.last = td;
  }
  sP(p);
  updateUI();
  if (p.lv > oldLv) showLevelUp(p.lv);
}

function updateUI() {
  const p = gP();
  document.getElementById('xpN').textContent = p.xp;
  document.getElementById('lvN').textContent = p.lv;
  document.getElementById('stN').textContent = p.st;
  document.getElementById('xpF').style.width = (p.xp / xpFor(p.lv) * 100) + '%';
}

function showLevelUp(lv) {
  document.getElementById('nLv').textContent = lv;
  document.getElementById('luO').classList.add('on');
  setTimeout(clsLU, 2800);
}
function clsLU() { document.getElementById('luO').classList.remove('on'); }

// ===== MARKDOWN PARSER =====
function md(t) {
  let h = t;
  h = h.replace(/^### (.+)$/gm, '<h3>$1</h3>');
  h = h.replace(/^## (.+)$/gm, '<h2>$1</h2>');
  h = h.replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>');
  // Preserve <span> tags (term, copyable, key etc)
  // Inline code (but not inside <span>)
  h = h.replace(/`([^`]+)`/g, (m, code) => {
    if (code.includes('<span')) return m;
    return '<code>' + code + '</code>';
  });
  h = h.replace(/```python\n([\s\S]*?)```/g, '<pre><code>$1</code></pre>');
  h = h.replace(/```\n?([\s\S]*?)```/g, '<pre><code>$1</code></pre>');
  // Tables
  h = h.replace(/^\|(.+)\|$/gm, (m, c) => {
    const cells = c.split('|').map(x => x.trim());
    if (cells.every(x => /^[-:]+$/.test(x))) return '';
    return '<tr>' + cells.map(x => '<td>' + x + '</td>').join('') + '</tr>';
  });
  h = h.replace(/((<tr>.*<\/tr>\s*)+)/g, '<table>$1</table>');
  // Lists
  h = h.replace(/^- (.+)$/gm, '<li>$1</li>');
  h = h.replace(/^\d+\. (.+)$/gm, '<li>$1</li>');
  h = h.replace(/((<li>.*<\/li>\s*)+)/g, '<ul>$1</ul>');
  // Paragraphs
  h = h.replace(/\n\n/g, '</p><p>');
  h = '<p>' + h + '</p>';
  h = h.replace(/<p>\s*<(h[23]|pre|table|ul|ol|li|tr)/g, '<$1');
  h = h.replace(/<\/(h[23]|pre|table|ul|ol|li|tr)>\s*<\/p>/g, '</$1>');
  h = h.replace(/<p>\s*<\/p>/g, '');
  return h;
}

function esc(t) {
  const d = document.createElement('div');
  d.textContent = t;
  return d.innerHTML;
}

// ===== NAVIGATION =====
function nav(p) {
  document.querySelectorAll('.pg').forEach(e => e.classList.remove('on'));
  document.getElementById('pg-' + p).classList.add('on');
  window.scrollTo(0, 0);
}

// ===== RENDER HOME =====
function render() {
  const p = gP();
  let totalL = 0, totalD = 0;
  const freeCards = [], proCards = [];

  COURSES.forEach(c => {
    const done = c.lessons.filter(l => p.done.includes(l.id)).length;
    totalL += c.lessons.length;
    totalD += done;
    const pct = c.lessons.length ? (done / c.lessons.length * 100) : 0;
    const lvMap = { b: 'lv-b', i: 'lv-i', a: 'lv-a', s: 'lv-s' };
    const lvLabel = { b: '初心者', i: '中級', a: '上級', s: 'スキル' };
    const clickAction = c.free
      ? `openCourse('${c.id}')`
      : `previewPro('${c.id}')`;

    const card = `<div class="course-card ${c.free ? '' : 'locked'}" onclick="${clickAction}">
      <div class="cc-icon">${c.icon}</div>
      <h4>${c.title}</h4>
      <p>${c.desc}</p>
      <div class="cc-meta">
        <span class="cc-lv ${lvMap[c.level]}">${lvLabel[c.level]}</span>
        <span class="cc-cnt">${c.lessons.length}レッスン</span>
      </div>
      <div class="cc-pb"><div class="cc-pf" style="width:${pct}%"></div></div>
    </div>`;

    if (c.free) freeCards.push(card); else proCards.push(card);
  });

  document.getElementById('cg').innerHTML = freeCards.join('');
  document.getElementById('cg-pro').innerHTML = proCards.join('');
  const overall = totalL ? (totalD / totalL * 100) : 0;
  document.getElementById('oP').style.width = overall + '%';
  document.getElementById('oPT').textContent = `${totalD} / ${totalL} レッスン完了`;
}

// ===== COURSE DETAIL =====
function openCourse(id) {
  const c = COURSES.find(x => x.id === id);
  if (!c) return;
  cCrs = c;
  const lvLabel = { b: '初心者', i: '中級', a: '上級', s: 'スキル' };
  const lvMap = { b: 'lv-b', i: 'lv-i', a: 'lv-a', s: 'lv-s' };
  document.getElementById('cdH').innerHTML = `
    <div class="cd-icon">${c.icon}</div>
    <h2>${c.title}</h2>
    <p class="cd-desc">${c.desc}</p>
    <span class="cc-lv ${lvMap[c.level]}">${lvLabel[c.level]}</span>`;

  const p = gP();
  document.getElementById('lL').innerHTML = c.lessons.map((l, i) => {
    const done = p.done.includes(l.id);
    return `<div class="lesson-item ${done ? 'done' : ''}" onclick="openLesson('${c.id}',${i})">
      <div class="li-num">${done ? '✓' : i + 1}</div>
      <div class="li-info"><h4>${l.title}</h4><span>レッスン ${i + 1}/${c.lessons.length}</span></div>
      <div class="li-xp">+${l.xp} XP</div>
    </div>`;
  }).join('');
  nav('course');
}

// ===== LESSON PAGE =====
function openLesson(cid, li) {
  const c = COURSES.find(x => x.id === cid);
  if (!c) return;
  cCrs = c;
  cLi = li;
  hIdx = 0;
  checkAttempts = 0;

  const l = c.lessons[li];
  const el = document.getElementById('lcEl');

  let h = `<div class="back-link" onclick="openCourse('${cid}')">← ${c.title}</div>`;
  h += `<div class="lesson-breadcrumb">${c.title} › レッスン ${li + 1}/${c.lessons.length}</div>`;
  h += `<h2 class="lesson-title">${l.title}</h2>`;

  l.content.forEach(b => {
    if (b.type === 'text') {
      h += `<div class="content-block text-block">${md(b.body)}</div>`;
    } else if (b.type === 'code') {
      h += `<div class="content-block"><div class="code-example">
        <div class="cex-header"><span>💻 コード例</span><button class="btn btn-s btn-xs" onclick="copyToEditor('${encodeURIComponent(b.code)}')">エディタにコピー</button></div>
        <div class="cex-body">${esc(b.code)}</div>
        ${b.desc ? `<div class="cex-desc">${b.desc}</div>` : ''}
      </div></div>`;
    } else if (b.type === 'tip') {
      h += `<div class="content-block"><div class="tip-block">${md(b.body)}</div></div>`;
    }
  });

  el.innerHTML = h;

  // Bind term clicks
  bindTermClicks();
  // Bind copyable clicks
  bindCopyable();

  // Exercise
  const ex = l.exercise;
  document.getElementById('eiEl').innerHTML = `<strong>📝 演習:</strong> ${ex.instruction}`;
  document.getElementById('edEl').value = ex.initialCode;
  initC = ex.initialCode;
  document.getElementById('opEl').textContent = 'ここに実行結果が表示されます';
  document.getElementById('opEl').className = 'output-content';
  document.getElementById('hpEl').style.display = 'none';
  document.getElementById('htEl').textContent = '💡 ヒントを見る';
  document.getElementById('showAnsBtn').style.display = 'none';
  hIdx = 0;

  document.getElementById('pvBtn').disabled = li === 0;
  document.getElementById('nxBtn').disabled = li >= c.lessons.length - 1;

  nav('lesson');
  // Focus editor
  setTimeout(() => document.getElementById('edEl').focus(), 300);
}

function copyToEditor(enc) {
  document.getElementById('edEl').value = decodeURIComponent(enc);
}

// ===== TERM CLICK (GLOSSARY POPUP) =====
function bindTermClicks() {
  document.querySelectorAll('.term').forEach(el => {
    el.style.cursor = 'pointer';
    el.addEventListener('click', (e) => {
      e.stopPropagation();
      const termId = el.getAttribute('data-term');
      showGlossary(termId, el);
    });
  });
}

function showGlossary(termId, anchorEl) {
  const entry = GLOSSARY[termId];
  if (!entry) { console.warn('Glossary term not found:', termId); return; }

  const popup = document.getElementById('glossaryPopup');

  // Build popup content
  document.getElementById('gpTitle').textContent = entry.term;
  document.getElementById('gpShort').textContent = entry.short;
  document.getElementById('gpDetail').innerHTML = entry.detail;

  if (entry.example) {
    document.getElementById('gpExample').style.display = 'block';
    document.getElementById('gpExCode').textContent = entry.example;
  } else {
    document.getElementById('gpExample').style.display = 'none';
  }

  // Related terms
  if (entry.related && entry.related.length > 0) {
    const links = entry.related.map(rid => {
      const r = GLOSSARY[rid];
      return r ? `<span class="gp-related-link" onclick="event.stopPropagation();showGlossary('${rid}', null)">${r.term}</span>` : '';
    }).filter(x => x).join(' ');
    document.getElementById('gpRelated').innerHTML = '<div class="gp-related-label">関連用語:</div>' + links;
    document.getElementById('gpRelated').style.display = 'block';
  } else {
    document.getElementById('gpRelated').style.display = 'none';
  }

  // Prevent immediate close from outside-click listener
  glossaryJustOpened = true;
  setTimeout(() => { glossaryJustOpened = false; }, 200);

  // Reset styles completely
  popup.style.cssText = '';
  popup.className = 'glossary-popup on';

  // Position: use fixed positioning
  if (anchorEl) {
    const rect = anchorEl.getBoundingClientRect();
    popup.style.position = 'fixed';
    popup.style.zIndex = '9999';

    // Show off-screen first to measure
    popup.style.top = '-9999px';
    popup.style.left = '-9999px';
    popup.style.display = 'block';

    requestAnimationFrame(() => {
      const ph = popup.offsetHeight || 200;
      const pw = popup.offsetWidth || 320;

      let top = rect.bottom + 10;
      let left = rect.left;

      // Flip above if no room below
      if (top + ph > window.innerHeight - 10) {
        top = Math.max(10, rect.top - ph - 10);
      }
      // Keep in horizontal bounds
      if (left + pw > window.innerWidth - 10) {
        left = Math.max(10, window.innerWidth - pw - 10);
      }

      popup.style.top = top + 'px';
      popup.style.left = left + 'px';
    });
  } else {
    // Center on screen (from search results)
    popup.style.position = 'fixed';
    popup.style.zIndex = '9999';
    popup.style.top = '50%';
    popup.style.left = '50%';
    popup.style.transform = 'translate(-50%, -50%)';
    popup.style.display = 'block';
  }
}

function closeGlossary() {
  const popup = document.getElementById('glossaryPopup');
  popup.classList.remove('on');
  popup.style.cssText = '';
  popup.style.display = 'none';
}

// Close glossary on outside click (with delay to prevent immediate close)
let glossaryJustOpened = false;
document.addEventListener('click', (e) => {
  if (glossaryJustOpened) return;
  const popup = document.getElementById('glossaryPopup');
  if (popup.classList.contains('on') && !popup.contains(e.target) && !e.target.classList.contains('term') && !e.target.closest('.gp-related-link')) {
    closeGlossary();
  }
});

// ===== COPYABLE SNIPPETS =====
function bindCopyable() {
  document.querySelectorAll('.copyable').forEach(el => {
    el.style.cursor = 'pointer';
    el.title = 'クリックでコピー';
    el.addEventListener('click', (e) => {
      e.stopPropagation();
      const text = el.textContent;
      navigator.clipboard.writeText(text).then(() => {
        const orig = el.textContent;
        el.textContent = '✓ コピーしました！';
        el.classList.add('copied');
        setTimeout(() => { el.textContent = orig; el.classList.remove('copied'); }, 1200);
      });
    });
  });
}

// ===== SEARCH MODAL =====
function openSearch() {
  document.getElementById('searchModal').classList.add('on');
  document.getElementById('searchInput').value = '';
  document.getElementById('searchInput').focus();
  document.getElementById('searchResults').innerHTML = '<div class="search-placeholder">🔍 プログラミング用語を検索してみよう</div>';
}

function closeSearch() {
  document.getElementById('searchModal').classList.remove('on');
}

function doSearch(query) {
  const results = document.getElementById('searchResults');
  if (!query.trim()) {
    results.innerHTML = '<div class="search-placeholder">🔍 プログラミング用語を検索してみよう</div>';
    return;
  }
  const q = query.toLowerCase();
  const matches = Object.entries(GLOSSARY).filter(([id, e]) =>
    e.term.toLowerCase().includes(q) ||
    e.short.toLowerCase().includes(q) ||
    e.detail.toLowerCase().includes(q) ||
    id.includes(q)
  );

  if (matches.length === 0) {
    results.innerHTML = '<div class="search-placeholder">😢 該当する用語が見つかりませんでした</div>';
    return;
  }

  results.innerHTML = matches.slice(0, 15).map(([id, e]) =>
    `<div class="search-result-item" onclick="showTermInSearch('${id}')">
      <div class="sr-term">${e.term}</div>
      <div class="sr-short">${e.short}</div>
    </div>`
  ).join('');
}

// Show term detail inside search modal (no popup needed)
function showTermInSearch(termId) {
  const entry = GLOSSARY[termId];
  if (!entry) return;

  const results = document.getElementById('searchResults');
  let html = `<div class="search-term-detail">`;
  html += `<div class="std-back" onclick="doSearch(document.getElementById('searchInput').value)">← 検索結果に戻る</div>`;
  html += `<h3 class="std-title">${entry.term}</h3>`;
  html += `<p class="std-short">${entry.short}</p>`;
  html += `<div class="std-detail">${entry.detail}</div>`;
  if (entry.example) {
    const escapedCode = entry.example.replace(/`/g, '\\`').replace(/\$/g, '\\$');
    html += `<div class="std-example">`;
    html += `<div class="std-ex-header"><span class="std-ex-label">コード例:</span><button class="std-run-btn" onclick="runGlossaryExample('${termId}')">▶ 実行</button></div>`;
    html += `<pre class="std-ex-code">${entry.example}</pre>`;
    html += `<div class="std-output" id="std-output-${termId}"><span class="std-output-placeholder">▶ 実行ボタンを押すと結果が表示されます</span></div>`;
    html += `</div>`;
  }
  if (entry.related && entry.related.length > 0) {
    html += `<div class="std-related"><span class="std-rel-label">関連用語: </span>`;
    html += entry.related.map(rid => {
      const r = GLOSSARY[rid];
      return r ? `<span class="std-rel-link" onclick="showTermInSearch('${rid}')">${r.term}</span>` : '';
    }).filter(x => x).join(' ');
    html += `</div>`;
  }
  html += `</div>`;
  results.innerHTML = html;
}

// Run glossary code example with Pyodide
async function runGlossaryExample(termId) {
  const entry = GLOSSARY[termId];
  if (!entry || !entry.example) return;

  const outputEl = document.getElementById('std-output-' + termId);
  if (!outputEl) return;

  if (!py) {
    outputEl.innerHTML = '<span class="std-output-err">⏳ Python環境を読み込み中…しばらくお待ちください</span>';
    return;
  }

  outputEl.innerHTML = '<span class="std-output-running">⏳ 実行中…</span>';

  try {
    py.runPython('import sys,io\nsys.stdout=io.StringIO()\nsys.stderr=io.StringIO()');
    py.runPython(entry.example);
    const stdout = py.runPython('sys.stdout.getvalue()');
    const stderr = py.runPython('sys.stderr.getvalue()');

    if (stderr) {
      outputEl.innerHTML = `<div class="std-output-label">⚠️ エラー:</div><pre class="std-output-code std-output-err">${stderr}</pre>`;
    } else if (stdout.trim()) {
      outputEl.innerHTML = `<div class="std-output-label">📤 実行結果:</div><pre class="std-output-code">${stdout.trimEnd()}</pre>`;
    } else {
      outputEl.innerHTML = `<div class="std-output-label">📤 実行結果:</div><pre class="std-output-code">(出力なし — 代入のみの例です)</pre>`;
    }
  } catch (e) {
    const lines = String(e.message || e).split('\n').filter(x => x.trim());
    const errMsg = lines.pop() || String(e);
    outputEl.innerHTML = `<div class="std-output-label">⚠️ エラー:</div><pre class="std-output-code std-output-err">${errMsg}</pre>`;
  }
}

// Close search on Escape
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    closeSearch();
    closeGlossary();
    closePremium();
  }
});

// ===== CODE EXECUTION =====
async function runCode() {
  const code = document.getElementById('edEl').value;
  const o = document.getElementById('opEl');

  if (!code.trim()) { o.textContent = 'コードを入力してください'; o.className = 'output-content err'; return; }
  if (!py) { o.textContent = 'Python環境を読み込み中…しばらくお待ちください'; return; }

  o.textContent = '実行中…';
  o.className = 'output-content';

  try {
    py.runPython('import sys,io\nsys.stdout=io.StringIO()\nsys.stderr=io.StringIO()');
    py.runPython(code);
    const stdout = py.runPython('sys.stdout.getvalue()');
    const stderr = py.runPython('sys.stderr.getvalue()');
    if (stderr) { o.textContent = stderr; o.className = 'output-content err'; }
    else { o.textContent = stdout || '(出力なし)'; o.className = 'output-content'; }
  } catch (e) {
    const lines = String(e.message || e).split('\n').filter(x => x.trim());
    o.textContent = lines.pop() || String(e);
    o.className = 'output-content err';
  }
}

// ===== FLEXIBLE ANSWER CHECKING =====
function normalizeOutput(s) {
  // Normalize whitespace, quotes, strip trailing spaces per line
  return s.trim()
    .split('\n')
    .map(line => line.trimEnd())
    .join('\n')
    .replace(/\s+$/gm, '');
}

async function chkAns() {
  const code = document.getElementById('edEl').value;
  const o = document.getElementById('opEl');
  const l = cCrs.lessons[cLi];
  const ex = l.exercise;

  if (!code.trim()) { o.textContent = 'コードを入力してください'; o.className = 'output-content err'; return; }
  if (!py) { o.textContent = 'Python環境を読み込み中…'; return; }

  checkAttempts++;

  try {
    py.runPython('import sys,io\nsys.stdout=io.StringIO()\nsys.stderr=io.StringIO()');
    py.runPython(code);
    const stdout = py.runPython('sys.stdout.getvalue()');
    const stderr = py.runPython('sys.stderr.getvalue()');

    if (stderr) {
      o.textContent = stderr;
      o.className = 'output-content err';
      if (checkAttempts >= 2) document.getElementById('showAnsBtn').style.display = '';
      return;
    }

    const actual = normalizeOutput(stdout);
    const expected = normalizeOutput(ex.expectedOutput);

    // Check output match
    const outputMatch = actual === expected;

    // Check keywords (flexible code check)
    let keywordMatch = true;
    if (ex.keywords && ex.keywords.length > 0) {
      keywordMatch = ex.keywords.every(kw => code.includes(kw));
    }

    if (outputMatch && keywordMatch) {
      // CORRECT!
      o.textContent = stdout.trim();
      o.className = 'output-content ok';

      const p = gP();
      if (!p.done.includes(l.id)) {
        p.done.push(l.id);
        sP(p);
        addXp(l.xp);
        document.getElementById('xpGT').textContent = `+${l.xp} XP`;
      } else {
        document.getElementById('xpGT').textContent = '(クリア済み)';
      }

      // Check if course is complete
      const allDone = cCrs.lessons.every(lesson => gP().done.includes(lesson.id));
      if (allDone) {
        showCourseClear();
      } else {
        // Random praise messages
        const praises = [
          '完璧です！',
          'その調子！',
          'すごい！理解してますね！',
          'バッチリ正解！',
          'パーフェクト！🎯',
          'コードが美しい！✨',
          'プロの仲間入り！💪'
        ];
        document.getElementById('okMsg').textContent = praises[Math.floor(Math.random() * praises.length)];
        document.getElementById('okMo').classList.add('on');
        createConfetti();
      }
    } else if (outputMatch && !keywordMatch) {
      // Output is correct but missing required keywords
      const missing = ex.keywords.filter(kw => !code.includes(kw));
      o.textContent = `出力は合っていますが、以下のキーワードをコードに含めてください:\n${missing.join(', ')}\n\n演習で求められている書き方で解いてみましょう！`;
      o.className = 'output-content err';
      if (checkAttempts >= 2) document.getElementById('showAnsBtn').style.display = '';
    } else {
      o.textContent = `不正解です\n\n期待される出力:\n${expected}\n\nあなたの出力:\n${actual}`;
      o.className = 'output-content err';
      if (checkAttempts >= 2) document.getElementById('showAnsBtn').style.display = '';
    }
  } catch (e) {
    const lines = String(e.message || e).split('\n').filter(x => x.trim());
    o.textContent = 'エラー: ' + (lines.pop() || String(e));
    o.className = 'output-content err';
    if (checkAttempts >= 2) document.getElementById('showAnsBtn').style.display = '';
  }
}

// ===== SHOW ANSWER =====
function showAnswer() {
  const l = cCrs.lessons[cLi];
  if (l.exercise.answer) {
    document.getElementById('edEl').value = l.exercise.answer;
    document.getElementById('opEl').textContent = '💡 模範解答をエディタに表示しました。実行して確認してみましょう！';
    document.getElementById('opEl').className = 'output-content';
  }
}

// ===== COURSE CLEAR =====
function showCourseClear() {
  const praises = [
    `「${cCrs.title}」を完全制覇しました！\nあなたのPython力が確実にレベルアップしています！`,
    `おめでとうございます！\n「${cCrs.title}」の全レッスンをクリア！\nこの知識は必ず役に立ちます！`,
    `すばらしい達成です！\n「${cCrs.title}」マスター！\n次のコースにも挑戦してみましょう！`
  ];
  document.getElementById('clearTitle').textContent = `🎊 ${cCrs.title} クリア！`;
  document.getElementById('clearMsg').textContent = 'おめでとうございます！';
  document.getElementById('clearPraise').textContent = praises[Math.floor(Math.random() * praises.length)];
  document.getElementById('clearMo').classList.add('on');
}

function clsClear() {
  document.getElementById('clearMo').classList.remove('on');
  render();
  nav('home');
}

// ===== CONFETTI =====
function createConfetti() {
  const container = document.getElementById('confetti');
  container.innerHTML = '';
  const colors = ['#3b82f6', '#22c55e', '#f59e0b', '#a855f7', '#ef4444', '#06b6d4'];
  for (let i = 0; i < 30; i++) {
    const c = document.createElement('div');
    c.className = 'confetti-piece';
    c.style.left = Math.random() * 100 + '%';
    c.style.background = colors[Math.floor(Math.random() * colors.length)];
    c.style.animationDelay = Math.random() * 0.5 + 's';
    c.style.animationDuration = (Math.random() * 1 + 1) + 's';
    container.appendChild(c);
  }
}

function rstCode() {
  document.getElementById('edEl').value = initC;
  document.getElementById('opEl').textContent = 'ここに実行結果が表示されます';
  document.getElementById('opEl').className = 'output-content';
}

// ===== HINTS =====
function togHint() {
  const hp = document.getElementById('hpEl');
  const hints = cCrs.lessons[cLi].exercise.hints;
  if (hp.style.display === 'none') {
    if (hIdx < hints.length) {
      hp.innerHTML = `<p>💡 ヒント${hIdx + 1}: ${hints[hIdx]}</p>`;
      hp.style.display = 'block';
      hIdx++;
      document.getElementById('htEl').textContent = hIdx < hints.length ? `💡 次のヒント (${hIdx}/${hints.length})` : '💡 ヒントを閉じる';
    }
  } else if (hIdx < hints.length) {
    hp.innerHTML += `<p>💡 ヒント${hIdx + 1}: ${hints[hIdx]}</p>`;
    hIdx++;
    document.getElementById('htEl').textContent = hIdx < hints.length ? `💡 次のヒント (${hIdx}/${hints.length})` : '💡 ヒントを閉じる';
  } else {
    hp.style.display = 'none';
    hIdx = 0;
    document.getElementById('htEl').textContent = '💡 ヒントを見る';
  }
}

// ===== LESSON NAVIGATION =====
function pvL() { if (cLi > 0) openLesson(cCrs.id, cLi - 1); }
function nxL() { if (cLi < cCrs.lessons.length - 1) openLesson(cCrs.id, cLi + 1); }

function clsMoNx() {
  document.getElementById('okMo').classList.remove('on');
  render();
  if (cLi < cCrs.lessons.length - 1) openLesson(cCrs.id, cLi + 1);
}

// ===== PREMIUM PREVIEW =====
function previewPro(cid) {
  const c = COURSES.find(x => x.id === cid);
  if (!c || !c.lessons[0]) return;
  const l = c.lessons[0];
  let html = `<h2>${c.icon} ${c.title}</h2><h3>${l.title}</h3>`;
  l.content.forEach(b => {
    if (b.type === 'text') html += `<div class="text-block">${md(b.body)}</div>`;
    else if (b.type === 'code') html += `<div class="code-example"><div class="cex-body">${esc(b.code)}</div></div>`;
  });
  document.getElementById('premiumPreview').innerHTML = html;
  document.getElementById('premiumMo').classList.add('on');
}

function closePremium() {
  document.getElementById('premiumMo').classList.remove('on');
}

// ===== EDITOR SHORTCUTS (VS Code style) =====
function setupEditor() {
  const editor = document.getElementById('edEl');

  editor.addEventListener('keydown', (e) => {
    const start = editor.selectionStart;
    const end = editor.selectionEnd;
    const val = editor.value;

    // Enter = Run code (without Shift)
    if (e.key === 'Enter' && !e.shiftKey && !e.ctrlKey && !e.altKey) {
      e.preventDefault();
      runCode();
      return;
    }

    // Shift+Enter = New line
    if (e.key === 'Enter' && e.shiftKey) {
      e.preventDefault();
      editor.value = val.substring(0, start) + '\n' + val.substring(end);
      editor.selectionStart = editor.selectionEnd = start + 1;
      return;
    }

    // Tab = Insert 4 spaces
    if (e.key === 'Tab' && !e.shiftKey) {
      e.preventDefault();
      editor.value = val.substring(0, start) + '    ' + val.substring(end);
      editor.selectionStart = editor.selectionEnd = start + 4;
      return;
    }

    // Shift+Tab = Remove indent
    if (e.key === 'Tab' && e.shiftKey) {
      e.preventDefault();
      const lineStart = val.lastIndexOf('\n', start - 1) + 1;
      const line = val.substring(lineStart, end);
      if (line.startsWith('    ')) {
        editor.value = val.substring(0, lineStart) + line.substring(4) + val.substring(end);
        editor.selectionStart = editor.selectionEnd = Math.max(start - 4, lineStart);
      }
      return;
    }

    // Ctrl+/ = Toggle comment
    if (e.key === '/' && e.ctrlKey) {
      e.preventDefault();
      const lineStart = val.lastIndexOf('\n', start - 1) + 1;
      const lineEnd = val.indexOf('\n', start);
      const actualEnd = lineEnd === -1 ? val.length : lineEnd;
      const line = val.substring(lineStart, actualEnd);

      if (line.trimStart().startsWith('# ')) {
        const idx = line.indexOf('# ');
        const newLine = line.substring(0, idx) + line.substring(idx + 2);
        editor.value = val.substring(0, lineStart) + newLine + val.substring(actualEnd);
        editor.selectionStart = editor.selectionEnd = start - 2;
      } else if (line.trimStart().startsWith('#')) {
        const idx = line.indexOf('#');
        const newLine = line.substring(0, idx) + line.substring(idx + 1);
        editor.value = val.substring(0, lineStart) + newLine + val.substring(actualEnd);
        editor.selectionStart = editor.selectionEnd = start - 1;
      } else {
        const newLine = '# ' + line;
        editor.value = val.substring(0, lineStart) + newLine + val.substring(actualEnd);
        editor.selectionStart = editor.selectionEnd = start + 2;
      }
      return;
    }

    // Alt+ArrowUp = Move line up
    if (e.key === 'ArrowUp' && e.altKey) {
      e.preventDefault();
      const lines = val.split('\n');
      let currentLine = val.substring(0, start).split('\n').length - 1;
      if (currentLine > 0) {
        [lines[currentLine], lines[currentLine - 1]] = [lines[currentLine - 1], lines[currentLine]];
        const newVal = lines.join('\n');
        const diff = lines[currentLine].length - lines[currentLine - 1].length;
        editor.value = newVal;
        editor.selectionStart = editor.selectionEnd = start - lines[currentLine].length - 1;
      }
      return;
    }

    // Alt+ArrowDown = Move line down
    if (e.key === 'ArrowDown' && e.altKey) {
      e.preventDefault();
      const lines = val.split('\n');
      let currentLine = val.substring(0, start).split('\n').length - 1;
      if (currentLine < lines.length - 1) {
        [lines[currentLine], lines[currentLine + 1]] = [lines[currentLine + 1], lines[currentLine]];
        const newVal = lines.join('\n');
        editor.value = newVal;
        editor.selectionStart = editor.selectionEnd = start + lines[currentLine].length + 1;
      }
      return;
    }

    // Ctrl+Shift+K = Delete line
    if (e.key === 'K' && e.ctrlKey && e.shiftKey) {
      e.preventDefault();
      const lineStart = val.lastIndexOf('\n', start - 1) + 1;
      let lineEnd = val.indexOf('\n', start);
      if (lineEnd === -1) lineEnd = val.length;
      else lineEnd += 1; // include newline
      editor.value = val.substring(0, lineStart) + val.substring(lineEnd);
      editor.selectionStart = editor.selectionEnd = lineStart;
      return;
    }

    // Ctrl+D = Duplicate selection or line
    if (e.key === 'd' && e.ctrlKey && !e.shiftKey) {
      e.preventDefault();
      if (start !== end) {
        // Duplicate selection
        const sel = val.substring(start, end);
        editor.value = val.substring(0, end) + sel + val.substring(end);
        editor.selectionStart = end;
        editor.selectionEnd = end + sel.length;
      } else {
        // Duplicate line
        const lineStart = val.lastIndexOf('\n', start - 1) + 1;
        let lineEnd = val.indexOf('\n', start);
        if (lineEnd === -1) lineEnd = val.length;
        const line = val.substring(lineStart, lineEnd);
        editor.value = val.substring(0, lineEnd) + '\n' + line + val.substring(lineEnd);
        editor.selectionStart = editor.selectionEnd = start + line.length + 1;
      }
      return;
    }
  });
}

// ===== INIT =====
async function init() {
  updateUI();
  render();
  setupEditor();

  try {
    py = await loadPyodide();
    document.getElementById('lo').classList.add('hid');
  } catch (e) {
    document.querySelector('.lo-text').textContent = 'Python環境の読み込みに失敗しました。ページを再読込してください。';
    console.error('Pyodide error:', e);
  }
}

init();

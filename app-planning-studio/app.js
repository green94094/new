const STEPS = [
  {
    id: "idea",
    tab: "아이디어",
    title: "어떤 앱을 만들고 싶나요?",
    why: "완벽하지 않아도 괜찮아요. 한 문장으로 대충 적어보는 게 시작이에요.",
    placeholder: "예) 우리 학교 급식 메뉴를 미리 보고 별점을 매길 수 있는 앱",
    hints: ["평소에 ‘이런 게 있으면 좋겠다’고 생각한 것", "친구들이 자주 불평하는 것", "학교생활에서 귀찮거나 불편한 것"],
    required: true,
  },
  {
    id: "target",
    tab: "사용자",
    title: "누가 이 앱을 사용하나요?",
    why: "‘모든 사람’보다 실제로 사용할 사람을 구체적으로 떠올리면 앱이 더 좋아져요.",
    placeholder: "예) 급식을 먹는 우리 학교 학생들, 특히 편식이 심한 친구들",
    hints: ["몇 살 또는 몇 학년인가요?", "언제, 어떤 상황에서 이 앱을 쓸까요?", "나와 비슷한 사람인가요, 다른 사람인가요?"],
    required: true,
  },
  {
    id: "problem",
    tab: "문제",
    title: "이 앱은 어떤 불편함을 해결하나요?",
    why: "좋은 앱은 기능이 많은 앱이 아니라, 실제 불편 하나를 잘 해결하는 앱이에요.",
    placeholder: "예) 급식이 맛있는 날인지 모르고 간식을 사 먹거나, 메뉴를 미리 확인하기 어려움",
    hints: ["이 앱이 없을 때 사람들은 어떻게 하나요?", "지금 방법은 무엇이 귀찮거나 아쉬운가요?"],
    required: true,
  },
  {
    id: "features",
    tab: "핵심 기능",
    title: "꼭 있어야 하는 기능은 무엇인가요?",
    why: "처음에는 2~3개면 충분해요. 앱의 목적을 이루는 데 꼭 필요한 기능만 적어 보세요.",
    placeholder: "예)\n오늘과 이번 주 급식 메뉴 보기\n메뉴에 별점 남기기\n별점 높은 메뉴 순위 보기",
    hints: ["기능마다 줄을 바꿔 적어 보세요.", "‘없으면 안 되는 기능’부터 적어 보세요."],
    required: true,
  },
  {
    id: "screens",
    tab: "화면",
    title: "앱을 열면 무엇이 보이나요?",
    why: "첫 화면부터 순서대로 떠올리면 실제 앱을 만들기가 쉬워져요.",
    placeholder: "예) 첫 화면에 오늘 급식 사진과 메뉴가 보이고, 아래에 별점 버튼이 있음",
    hints: ["첫 화면 맨 위에는 무엇이 있나요?", "버튼을 누르면 어느 화면으로 넘어가나요?", "화면은 몇 개 정도 필요할까요?"],
    required: true,
  },
  {
    id: "diff",
    tab: "차별점",
    title: "비슷한 앱과 무엇이 다른가요? (선택)",
    why: "거창하지 않아도 괜찮아요. ‘우리 학교만’, ‘학생끼리만’ 같은 작은 차이가 차별점이에요.",
    placeholder: "예) 메뉴만 보여 주는 대신, 우리 학교 학생끼리 별점과 한 줄 평을 남길 수 있음",
    hints: ["비슷한 앱을 써 본 적이 있나요?", "그 앱에서 아쉬웠던 점은 무엇인가요?", "잘 모르겠다면 비워 두어도 괜찮아요."],
    required: false,
  },
];

const GENERIC_SUGGESTIONS = [
  { name: "즐겨찾기", desc: "자주 보는 내용이나 마음에 든 항목을 다시 찾기 쉽게 저장합니다." },
  { name: "알림", desc: "중요한 일정이나 새 소식을 원하는 시간에 알려 줍니다." },
  { name: "검색과 필터", desc: "내용이 많아졌을 때 필요한 항목만 빠르게 찾도록 돕습니다." },
];

const SUGGESTION_RULES = [
  { words: ["급식", "음식", "메뉴", "맛집"], items: [
    { name: "알레르기 표시", desc: "메뉴에서 피해야 할 재료를 한눈에 확인합니다." },
    { name: "먹고 싶은 메뉴 투표", desc: "사용자가 원하는 메뉴에 투표하고 결과를 봅니다." },
    { name: "사진과 한 줄 평", desc: "먹어 본 메뉴의 사진과 짧은 의견을 남깁니다." },
  ]},
  { words: ["공부", "과제", "시험", "일정", "시간표"], items: [
    { name: "완료 표시", desc: "끝낸 할 일을 체크해 진행 상황을 확인합니다." },
    { name: "마감 알림", desc: "과제나 시험 날짜가 가까워지면 알려 줍니다." },
    { name: "우선순위", desc: "먼저 해야 할 일을 위쪽에 모아 보여 줍니다." },
  ]},
  { words: ["기록", "일기", "감정", "운동", "습관"], items: [
    { name: "달력 보기", desc: "날짜별 기록을 달력에서 한눈에 확인합니다." },
    { name: "연속 기록 표시", desc: "며칠 동안 꾸준히 기록했는지 보여 줍니다." },
    { name: "나의 변화", desc: "기간별 기록을 간단한 숫자나 막대로 비교합니다." },
  ]},
  { words: ["학교", "교실", "동아리", "친구"], items: [
    { name: "우리 학교 설정", desc: "사용자의 학교에 맞는 내용만 골라 보여 줍니다." },
    { name: "간단한 의견 남기기", desc: "학생들이 짧은 의견을 나누고 참고할 수 있습니다." },
    { name: "신고와 숨기기", desc: "불편하거나 부적절한 글을 학생이 직접 숨길 수 있습니다." },
  ]},
  { words: ["분실", "찾기", "위치", "지도"], items: [
    { name: "장소별 보기", desc: "등록된 내용을 장소에 따라 나누어 확인합니다." },
    { name: "발견 알림", desc: "찾던 물건이나 정보가 등록되면 알려 줍니다." },
    { name: "사진으로 등록", desc: "글뿐 아니라 사진을 함께 올려 쉽게 알아봅니다." },
  ]},
];

const state = {
  phase: "intro",
  step: 0,
  answers: {},
  plan: null,
  suggestions: [],
  addedSuggestions: new Set(),
};

const $ = (selector) => document.querySelector(selector);
const $$ = (selector) => [...document.querySelectorAll(selector)];

function escapeHtml(value = "") {
  return String(value).replace(/[&<>'"]/g, (char) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", "'": "&#39;", '"': "&quot;" }[char]));
}

function cleanText(value = "") {
  return value.replace(/\r/g, "").replace(/[ \t]+/g, " ").trim();
}

function splitItems(value = "") {
  return value
    .split(/\n|,|·|•/)
    .map((item) => item.replace(/^\s*(?:\d+[.)]|[-–—])\s*/, "").trim())
    .filter(Boolean)
    .slice(0, 8);
}

function sentence(value, ending = "") {
  const text = cleanText(value).replace(/[.!?]+$/, "");
  if (!text) return "";
  return ending ? `${text}${ending}` : `${text}.`;
}

const SMASH_PATTERNS = [
  /asdf|sdfg|dfgh|fghj|qwer|wert|erty|zxcv|xcvb|hjkl/i,
  /(?:abc|xyz|test){1,}/i,
  /(?:1234|2345|3456|0000|1111)/,
  /아무거나|몰라(?:요)?|귀찮(?:아|음)?|대충|없음만/u,
];

function looksLikeSmash(text) {
  const compact = text.replace(/\s/g, "");
  if (SMASH_PATTERNS.some((pattern) => pattern.test(compact))) return true;
  if (/(.{1,3})\1{2,}/u.test(compact)) return true;
  if (compact.length >= 5 && new Set(compact).size <= Math.max(2, Math.floor(compact.length / 4))) return true;
  return false;
}

function validate(step, value) {
  const text = cleanText(value);
  if (!text) return step.required ? "짧아도 좋으니 내 생각을 한 줄 적어 주세요." : "";
  const compact = text.replace(/\s/g, "");
  const jamo = (text.match(/[ㄱ-ㅎㅏ-ㅣ]/g) || []).length;
  const korean = (text.match(/[가-힣]/g) || []).length;
  const letters = (text.match(/[가-힣a-zA-Z]/g) || []).length;
  if (jamo > 0) return "자음이나 모음만 입력한 부분이 있어요. 뜻이 통하는 문장으로 다시 적어 주세요.";
  if (looksLikeSmash(text)) return "키보드를 아무렇게나 입력한 내용은 사용할 수 없어요. 내 생각을 문장으로 적어 주세요.";
  if (korean < 3) return "영문이나 숫자만 입력할 수 없어요. 뜻이 통하는 한국어 문장으로 적어 주세요.";
  if (letters < 6 || compact.length < 6) return "조금 더 구체적으로 적어 주세요. 적어도 한 문장이나 설명이 필요해요.";
  if (/[a-zA-Z]{5,}/.test(text) && korean < 5) return "영문만 길게 입력한 부분이 있어요. 한국어 설명을 함께 적어 주세요.";
  if (step.id === "features") {
    const items = splitItems(text);
    if (items.length < 2) return "핵심 기능을 두 가지 이상 적어 주세요. 기능마다 줄을 바꾸면 좋아요.";
    if (items.some((item) => looksLikeSmash(item) || (item.match(/[가-힣]/g) || []).length < 2)) {
      return "각 기능을 뜻이 통하는 한국어로 적어 주세요. 의미 없는 입력은 사용할 수 없어요.";
    }
  }
  return "";
}

function canOpenStep(index) {
  if (index === 0) return true;
  return STEPS.slice(0, index).every((step) => {
    const value = state.answers[step.id] || "";
    return !validate(step, value) && (!step.required || cleanText(value));
  });
}

function findFirstInvalidStep() {
  for (let index = 0; index < STEPS.length; index += 1) {
    const step = STEPS[index];
    const message = validate(step, state.answers[step.id] || "");
    if (message) return { index, message };
  }
  return null;
}

function saveDraft() {
  try { localStorage.setItem("appPlannerDraftV2", JSON.stringify({ answers: state.answers, step: state.step })); } catch (_) {}
}

function loadDraft() {
  try {
    const saved = JSON.parse(localStorage.getItem("appPlannerDraftV2") || "null");
    if (saved && saved.answers) {
      state.answers = saved.answers;
      state.step = Math.min(Number(saved.step) || 0, STEPS.length - 1);
    }
  } catch (_) {}
}

function clearDraft() {
  try { localStorage.removeItem("appPlannerDraftV2"); } catch (_) {}
}

function showView(name) {
  state.phase = name;
  $$(".view").forEach((view) => view.classList.toggle("active", view.id === `${name}-view`));
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function renderTabs() {
  $("#step-tabs").innerHTML = STEPS.map((step, index) => {
    const done = !validate(step, state.answers[step.id] || "") && cleanText(state.answers[step.id] || "");
    const locked = !canOpenStep(index);
    return `<button class="step-tab ${index === state.step ? "active" : ""} ${done ? "done" : ""} ${locked ? "locked" : ""}" data-step="${index}" type="button" ${locked ? "disabled" : ""}>${escapeHtml(step.tab)}</button>`;
  }).join("");
  $$(".step-tab").forEach((button) => button.addEventListener("click", () => {
    state.answers[STEPS[state.step].id] = $("#answer-input").value;
    const targetStep = Number(button.dataset.step);
    if (!canOpenStep(targetStep)) return;
    state.step = targetStep;
    saveDraft();
    renderStep();
  }));
}

function renderStep() {
  const step = STEPS[state.step];
  renderTabs();
  $("#step-count").textContent = `질문 ${state.step + 1} / ${STEPS.length}${step.required ? "" : " · 선택"}`;
  $("#step-title").textContent = step.title;
  $("#step-why").textContent = step.why;
  $("#answer-input").placeholder = step.placeholder;
  $("#answer-input").value = state.answers[step.id] || "";
  $("#hint-list").innerHTML = step.hints.map((hint) => `<li>${escapeHtml(hint)}</li>`).join("");
  $("#validation-message").textContent = "";
  $("#prev-btn").textContent = state.step === 0 ? "← 처음으로" : "← 이전";
  $("#next-btn").textContent = state.step === STEPS.length - 1 ? "다 썼어요 ✓" : "다음 →";
  $("#progress-fill").style.width = `${((state.step + 1) / STEPS.length) * 100}%`;
  $("#progress-label").textContent = `기획서 작성 중 · ${state.step + 1}단계`;
  setTimeout(() => $("#answer-input").focus(), 50);
}

function moveNext() {
  const step = STEPS[state.step];
  const value = $("#answer-input").value;
  const message = validate(step, value);
  state.answers[step.id] = value;
  saveDraft();
  if (message) {
    $("#validation-message").textContent = message;
    return;
  }
  if (state.step < STEPS.length - 1) {
    state.step += 1;
    renderStep();
  } else {
    renderReview();
    showView("review");
  }
}

function movePrev() {
  state.answers[STEPS[state.step].id] = $("#answer-input").value;
  saveDraft();
  if (state.step === 0) showView("intro");
  else { state.step -= 1; renderStep(); }
}

function renderReview() {
  $("#review-list").innerHTML = STEPS.map((step, index) => `
    <div class="review-item">
      <div class="review-label"><span>${escapeHtml(step.tab)}</span><button class="text-btn edit-answer" data-step="${index}" type="button">수정</button></div>
      <p>${escapeHtml(cleanText(state.answers[step.id] || "") || "(작성하지 않음)")}</p>
    </div>`).join("");
  $$(".edit-answer").forEach((button) => button.addEventListener("click", () => {
    state.step = Number(button.dataset.step);
    renderStep();
    showView("steps");
  }));
}

function deriveName(idea) {
  let core = cleanText(idea)
    .replace(/(?:을|를)?\s*(?:할|하는|해주는|돕는|위한)?\s*수\s*있는\s*앱.*$/u, "")
    .replace(/(?:앱|어플리케이션|어플).*$/u, "")
    .replace(/^(?:우리|나의|내가)\s*/u, "")
    .trim();
  if (!core) return "나의 아이디어 앱";
  const words = core.split(/\s+/).slice(0, 5).join(" ");
  return words.length > 22 ? `${words.slice(0, 22).trim()}…` : words;
}

function buildPlan() {
  const invalid = findFirstInvalidStep();
  if (invalid) {
    state.step = invalid.index;
    renderStep();
    showView("steps");
    $("#validation-message").textContent = invalid.message;
    return;
  }
  const a = state.answers;
  const features = splitItems(a.features);
  const target = sentence(a.target);
  const problem = sentence(a.problem);
  const idea = cleanText(a.idea);
  state.plan = {
    name: deriveName(idea),
    idea: sentence(idea),
    oneLiner: `${cleanText(a.target)}을 위한 앱으로, ${cleanText(a.problem)} 문제를 해결하도록 돕습니다.`,
    target,
    problem,
    features: features.map((item) => sentence(item, item.endsWith("기") ? " 기능" : "")),
    screens: sentence(a.screens),
    diff: cleanText(a.diff) ? sentence(a.diff) : "먼저 핵심 기능을 완성한 뒤, 사용자 의견을 받아 차별점을 정합니다.",
    firstStep: features.length
      ? `가장 먼저 ‘${features[0]}’ 기능이 작동하는 첫 화면을 만듭니다.`
      : "가장 중요한 기능 하나가 작동하는 첫 화면부터 만듭니다.",
  };
  state.suggestions = chooseSuggestions(`${a.idea} ${a.problem} ${a.features}`);
  state.addedSuggestions = new Set();
  renderResult();
  showView("result");
}

function chooseSuggestions(text) {
  const normalized = text.toLowerCase();
  const matched = SUGGESTION_RULES.find((rule) => rule.words.some((word) => normalized.includes(word)));
  return matched ? matched.items : GENERIC_SUGGESTIONS;
}

function renderResult() {
  const p = state.plan;
  $("#result-heading").textContent = p.name || "나의 앱 기획서";
  $("#one-liner").textContent = p.oneLiner;
  const sections = [
    ["💬 앱 아이디어", `<p>${escapeHtml(p.idea)}</p>`],
    ["👥 누가 사용하나요?", `<p>${escapeHtml(p.target)}</p>`],
    ["🎯 어떤 문제를 해결하나요?", `<p>${escapeHtml(p.problem)}</p>`],
    ["🛠 핵심 기능", `<ol>${p.features.map((item) => `<li>${escapeHtml(item)}</li>`).join("")}</ol>`],
    ["🖥 화면 구성", `<p>${escapeHtml(p.screens)}</p>`],
    ["✨ 차별점", `<p>${escapeHtml(p.diff)}</p>`],
    ["🚀 가장 먼저 만들 것", `<p>${escapeHtml(p.firstStep)}</p>`],
  ];
  $("#plan-sections").innerHTML = sections.map(([title, body]) => `<section class="plan-section"><h3>${title}</h3>${body}</section>`).join("");
  renderSuggestions();
  $("#thinking-questions").innerHTML = [
    "처음 사용하는 사람도 설명 없이 쓸 수 있을까요?",
    `‘${p.features[0] || "핵심 기능"}’을(를) 가장 간단하게 만드는 방법은 무엇일까요?`,
    "친구 한 명에게 보여 준다면 어떤 의견을 먼저 물어볼까요?",
  ].map((question) => `<li>${escapeHtml(question)}</li>`).join("");
}

function renderSuggestions() {
  $("#suggestions").innerHTML = state.suggestions.map((item, index) => {
    const added = state.addedSuggestions.has(index);
    return `<div class="suggestion"><b>${escapeHtml(item.name)}</b><p>${escapeHtml(item.desc)}</p><button class="btn small secondary add-suggestion ${added ? "added" : ""}" data-index="${index}" type="button" ${added ? "disabled" : ""}>${added ? "추가됨 ✓" : "기획서에 추가"}</button></div>`;
  }).join("");
  $$(".add-suggestion").forEach((button) => button.addEventListener("click", () => {
    const index = Number(button.dataset.index);
    state.plan.features.push(`${state.suggestions[index].name}: ${state.suggestions[index].desc}`);
    state.addedSuggestions.add(index);
    renderResult();
  }));
}

function planText() {
  const p = state.plan;
  return `━━━━━━━━━━━━━━━━━━━━\n📱 앱 기획서\n━━━━━━━━━━━━━━━━━━━━\n\n1. 앱 개요\n- 앱 이름: ${p.name}\n- 한 줄 소개: ${p.oneLiner}\n- 처음 아이디어: ${p.idea}\n\n2. 대상 사용자\n${p.target}\n\n3. 해결하려는 문제\n${p.problem}\n\n4. 핵심 기능\n${p.features.map((feature, index) => `${index + 1}) ${feature}`).join("\n")}\n\n5. 화면 구성과 사용 흐름\n${p.screens}\n\n6. 차별점\n${p.diff}\n\n7. 가장 먼저 만들 기능(MVP)\n${p.firstStep}\n\n━━━━━━━━━━━━━━━━━━━━\n작성 도구: 앱 기획 스튜디오`;
}

function promptText() {
  const p = state.plan;
  return `당신은 학생의 아이디어를 실제 웹앱으로 만들어 주는 친절한 개발자입니다.\n아래 기획서를 정확히 읽고, 학생의 핵심 아이디어를 바꾸지 않은 채 실행 가능한 앱을 만들어 주세요.\n\n[반드시 지킬 실행 방식]\n- 이 요청을 일반 채팅의 코드 답변으로 처리하지 마세요.\n- Gemini Canvas에서 실행 가능한 웹앱으로 생성하세요.\n- 채팅 본문 아래에 전체 코드를 길게 나열하지 마세요.\n- 앱이 완성되면 Canvas의 미리보기(Preview) 화면을 바로 열어 실제 작동 모습을 보여 주세요.\n- 미리보기에서 버튼과 주요 기능을 직접 눌러 볼 수 있어야 합니다.\n- 오류가 있으면 콘솔을 확인해 수정하고, 정상 실행되는 미리보기 상태로 마무리하세요.\n- 현재 대화에서 Canvas를 사용할 수 없다면 코드만 출력하지 말고, 먼저 Canvas를 선택한 뒤 다시 요청하라고 안내하세요.\n\n${planText()}\n\n[제작 요청]\n1. 가장 먼저 ${p.firstStep}\n2. 화면의 모든 글자는 자연스러운 한국어로 작성해 주세요.\n3. 중·고등학생이 쉽게 사용할 수 있도록 밝고 깔끔하며 모바일에서도 편한 화면으로 만들어 주세요.\n4. 버튼을 누르면 실제로 작동하도록 구현하고, 확인할 수 있는 예시 데이터도 넣어 주세요.\n5. 기획서에 없는 복잡한 기능은 임의로 추가하지 말아 주세요.\n6. 로그인, 학생 계정, 유료 API, 외부 서버 없이 사용할 수 있게 만들어 주세요.\n7. 저장이 필요하다면 브라우저의 로컬 저장 기능만 사용해 주세요.\n8. 외부 설치 없이 Canvas 안에서 바로 실행하고 미리 볼 수 있는 웹앱으로 완성해 주세요.\n\n완성 후에는 코드를 설명하는 것으로 끝내지 말고, 반드시 Canvas 미리보기 화면에서 앱을 실행해 보여 주세요.`;
}

async function copyText(text, label) {
  const status = $("#copy-status");
  try {
    await navigator.clipboard.writeText(text);
    status.textContent = `${label}이(가) 복사됐어요. 원하는 곳에 붙여 넣으세요.`;
    $("#manual-copy").classList.remove("show");
  } catch (_) {
    $("#manual-copy").value = text;
    $("#manual-copy").classList.add("show");
    $("#manual-copy").focus();
    $("#manual-copy").select();
    status.textContent = "자동 복사가 제한되어 아래 상자를 선택했습니다. Ctrl+C로 복사하세요.";
  }
}

function downloadPlan() {
  const blob = new Blob([planText()], { type: "text/plain;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const anchor = document.createElement("a");
  anchor.href = url;
  anchor.download = `${(state.plan.name || "앱기획서").replace(/[\\/:*?"<>|]/g, "-")}.txt`;
  anchor.click();
  URL.revokeObjectURL(url);
}

function openEditDialog() {
  const p = state.plan;
  $("#edit-name").value = p.name;
  $("#edit-oneliner").value = p.oneLiner;
  $("#edit-idea").value = p.idea;
  $("#edit-target").value = p.target;
  $("#edit-problem").value = p.problem;
  $("#edit-features").value = p.features.join("\n");
  $("#edit-screens").value = p.screens;
  $("#edit-diff").value = p.diff;
  $("#edit-first-step").value = p.firstStep;
  $("#edit-dialog").showModal();
}

function saveEditedPlan(event) {
  event.preventDefault();
  state.plan = {
    ...state.plan,
    name: cleanText($("#edit-name").value) || "나의 앱 기획서",
    oneLiner: cleanText($("#edit-oneliner").value),
    idea: cleanText($("#edit-idea").value),
    target: cleanText($("#edit-target").value),
    problem: cleanText($("#edit-problem").value),
    features: splitItems($("#edit-features").value),
    screens: cleanText($("#edit-screens").value),
    diff: cleanText($("#edit-diff").value),
    firstStep: cleanText($("#edit-first-step").value),
  };
  renderResult();
  $("#edit-dialog").close();
}

function resetAll() {
  if (!confirm("작성한 내용을 모두 지우고 처음부터 시작할까요?")) return;
  state.answers = {};
  state.plan = null;
  state.step = 0;
  clearDraft();
  $("#answer-input").value = "";
  showView("intro");
}

function bindEvents() {
  $("#start-btn").addEventListener("click", () => { renderStep(); showView("steps"); });
  $("#answer-input").addEventListener("input", (event) => {
    state.answers[STEPS[state.step].id] = event.target.value;
    $("#validation-message").textContent = "";
    saveDraft();
    renderTabs();
  });
  $("#next-btn").addEventListener("click", moveNext);
  $("#prev-btn").addEventListener("click", movePrev);
  $("#reset-btn").addEventListener("click", resetAll);
  $("#review-back-btn").addEventListener("click", () => { renderStep(); showView("steps"); });
  $("#make-plan-btn").addEventListener("click", buildPlan);
  $("#back-to-review-btn").addEventListener("click", () => { renderReview(); showView("review"); });
  $("#new-plan-btn").addEventListener("click", resetAll);
  $("#copy-plan-btn").addEventListener("click", () => copyText(planText(), "기획서"));
  $("#copy-prompt-btn").addEventListener("click", () => copyText(promptText(), "코딩 요청문"));
  $("#download-btn").addEventListener("click", downloadPlan);
  $("#edit-result-btn").addEventListener("click", openEditDialog);
  $("#save-edit-btn").addEventListener("click", saveEditedPlan);
}

loadDraft();
bindEvents();

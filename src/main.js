import './style.css';
import { brand, courses, templates } from './brand.js';
import { initScene } from './scene.js';
import { initGlossary } from './glossary.js';

const $ = (selector) => document.querySelector(selector);
const escapeHTML = (value) => String(value).replace(/[&<>"']/g, (char) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[char]));
Object.entries(brand.colors).forEach(([name, value]) => document.documentElement.style.setProperty('--' + name, value));
document.title = brand.name + ' | 사내 AI 교육';

const STORAGE_KEY = 'abc-lab-campus-learning-v1';
const allLessons = courses.flatMap((course) => course.lessons);
const knownIds = new Set(allLessons.map((lesson) => lesson.id));
let completed = new Set();
let storageAvailable = true;
try {
  const saved = JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]');
  if (Array.isArray(saved)) completed = new Set(saved.filter((id) => knownIds.has(id)));
} catch { storageAvailable = false; }
let selectedCategory = '전체';
let searchQuery = '';
let activeCourse;
let activeLessonIndex = 0;

function saveProgress() {
  try { localStorage.setItem(STORAGE_KEY, JSON.stringify([...completed])); }
  catch { storageAvailable = false; }
  if (!storageAvailable) $('#storage-note').textContent = '브라우저 저장소를 사용할 수 없어 현재 화면에서만 학습 체크가 유지됩니다. 공식 수료 기록이 아닙니다.';
}
function updateLearning() {
  const done = completed.size;
  $('#completion-count').textContent = done + ' / ' + allLessons.length + ' 레슨';
  $('#completion-percent').textContent = Math.round(done / allLessons.length * 100) + '%';
  $('#completion-meter').max = allLessons.length;
  $('#completion-meter').value = done;
  $('#learning-summary').textContent = done === 0 ? '첫 레슨부터 차근차근 시작해보세요.' : done === allLessons.length ? '모든 레슨의 학습을 체크했어요. 필요할 때 다시 살펴보세요.' : '학습 체크 ' + done + '개. 다음 레슨으로 배움을 이어가세요.';
  $('#resume-learning').innerHTML = (done === 0 ? '학습 시작하기' : done === allLessons.length ? '다시 살펴보기' : '이어서 학습하기') + ' <span aria-hidden="true">→</span>';
  if (!storageAvailable) $('#storage-note').textContent = '브라우저 저장소를 사용할 수 없어 현재 화면에서만 학습 체크가 유지됩니다. 공식 수료 기록이 아닙니다.';
}

function courseArt(type) {
  const head = '<svg viewBox="0 0 200 105" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.5">';
  const graphics = {
    basics: '<ellipse cx="100" cy="53" rx="56" ry="20" transform="rotate(-28 100 53)" opacity=".5"/><ellipse cx="100" cy="53" rx="56" ry="20" transform="rotate(40 100 53)" opacity=".5"/><circle cx="100" cy="53" r="29" fill="white" fill-opacity=".55"/><path d="M88 62V43h9c9 0 9 11 0 11h-9m0 0h10m11-11v19" stroke-width="2.5"/><circle cx="54" cy="67" r="5" fill="currentColor"/><circle cx="147" cy="28" r="4" fill="currentColor"/>',
    prompt: '<rect x="45" y="19" width="110" height="67" rx="9" fill="white" fill-opacity=".6"/><path d="M58 37l8 7-8 7m18 0h18M58 64h81M58 73h49" stroke-width="2"/><rect x="119" y="50" width="39" height="34" rx="6" fill="#eeeafb"/><path d="M131 61l-5 5 5 5m15-10 5 5-5 5m-7-12-3 15"/>',
    agent: '<path d="M67 36l-24 17 24 17m66-34 24 17-24 17M78 27l44 52" opacity=".45"/><rect x="73" y="27" width="54" height="54" rx="14" fill="white" fill-opacity=".7"/><circle cx="91" cy="49" r="4" fill="currentColor"/><circle cx="110" cy="49" r="4" fill="currentColor"/><path d="M90 63h20m-10-36v-9m-4 0h8"/><circle cx="40" cy="53" r="6" fill="currentColor"/><circle cx="160" cy="53" r="6" fill="currentColor"/>',
    works: '<rect x="27" y="30" width="58" height="48" rx="10" fill="white" fill-opacity=".65"/><rect x="115" y="30" width="58" height="48" rx="10" fill="white" fill-opacity=".65"/><path d="M85 49h29m-6-6 6 6-6 6m7 7H86m6-6-6 6 6 6"/><text x="56" y="59" fill="currentColor" stroke="none" font-size="11" text-anchor="middle" font-weight="600">ABC</text><text x="144" y="59" fill="currentColor" stroke="none" font-size="11" text-anchor="middle" font-weight="600">WORKS</text>',
    practice: '<rect x="47" y="22" width="106" height="63" rx="8" fill="white" fill-opacity=".65"/><path d="M60 72h78M71 71V56h12v15m12 0V44h12v27m12 0V33h12v38"/><path d="M66 42l16-9 16 4 26-20m-8 0h8v8" stroke-width="2"/>'
  };
  return head + graphics[type] + '</svg>';
}
function renderFilters() {
  $('#course-filters').innerHTML = ['전체', ...courses.map((course) => course.category)].map((category) => '<button class="filter" type="button" data-category="' + escapeHTML(category) + '" aria-pressed="' + (category === selectedCategory) + '">' + escapeHTML(category) + '</button>').join('');
}
function renderCourses() {
  const query = searchQuery.toLocaleLowerCase('ko').trim();
  const filtered = courses.filter((course) => (selectedCategory === '전체' || course.category === selectedCategory) && [course.title, course.summary, course.category, ...course.lessons.map((lesson) => lesson.title)].join(' ').toLocaleLowerCase('ko').includes(query));
  $('#course-results').textContent = '전체 ' + courses.length + '개 과정 중 ' + filtered.length + '개';
  $('#empty-results').hidden = filtered.length > 0;
  $('#course-grid').innerHTML = filtered.map((course) => {
    const done = course.lessons.filter((lesson) => completed.has(lesson.id)).length;
    return '<article class="course-card"><div class="course-art art-' + course.art + '"><span class="art-index">COURSE / ' + course.code + '</span>' + courseArt(course.art) + '<span class="art-label">' + ({basics:'AI LITERACY',prompt:'PROMPT DESIGN',agent:'AGENT BUILDER',works:'CONNECT TO WORK',practice:'WORK SMARTER'}[course.art]) + '</span></div><div class="course-body"><div class="card-tags"><span class="category-tag">' + escapeHTML(course.category) + '</span><span>' + escapeHTML(course.level) + '</span>' + (course.review ? '<span class="review-tag">사내 가이드 보완 필요</span>' : '') + '</div><h3>' + escapeHTML(course.title) + '</h3><p class="course-description">' + escapeHTML(course.summary) + '</p><div class="course-meta"><span>' + course.lessons.length + '개 레슨</span><span>권장 ' + course.minutes + '분</span><span>실습 포함</span></div><div class="course-bottom"><span class="course-completion">학습 체크 ' + done + ' / ' + course.lessons.length + '</span><button class="course-open" type="button" data-open="' + course.id + '" aria-label="' + escapeHTML(course.title) + ' 과정 보기">과정 보기 <span aria-hidden="true">↗</span></button></div></div></article>';
  }).join('');
}
const roadmapDescriptions = ['원리·검증·보안의 기본', '요청을 명확하게 설계', '나만의 에이전트 설계', '권한·연동 사전 점검', '반복 업무에 작게 적용'];
$('#roadmap').innerHTML = courses.map((course, index) => '<li><button type="button" data-open="' + course.id + '" aria-label="' + escapeHTML(course.title) + ' 학습"><span class="step-number">' + course.code + '</span><strong>' + escapeHTML(course.category) + '</strong><p>' + roadmapDescriptions[index] + '</p></button></li>').join('');
$('#template-grid').innerHTML = templates.map((template) => '<article class="template-card"><span class="template-code" aria-hidden="true">&lt;/&gt;</span><p class="template-tag">' + escapeHTML(template.tag) + '</p><h3>' + escapeHTML(template.title) + '</h3><p>' + escapeHTML(template.description) + '</p><details><summary>프롬프트 내용 보기</summary><pre>' + escapeHTML(template.text) + '</pre></details><button class="copy-button" type="button" data-copy="' + template.id + '" aria-label="' + escapeHTML(template.title) + ' 프롬프트 복사">프롬프트 복사 <span aria-hidden="true">↗</span></button></article>').join('');

const dialog = $('#course-dialog');
function openCourse(id, lessonIndex) {
  activeCourse = courses.find((course) => course.id === id);
  if (!activeCourse) return;
  const firstIncomplete = activeCourse.lessons.findIndex((lesson) => !completed.has(lesson.id));
  activeLessonIndex = lessonIndex ?? (firstIncomplete < 0 ? 0 : firstIncomplete);
  $('#dialog-title').textContent = activeCourse.title;
  $('#dialog-eyebrow').textContent = 'COURSE ' + activeCourse.code + ' / ' + activeCourse.category + ' / 권장 ' + activeCourse.minutes + '분';
  renderLessonNav();
  renderLesson();
  if (!dialog.open) dialog.showModal();
}
function renderLessonNav() {
  const done = activeCourse.lessons.filter((lesson) => completed.has(lesson.id)).length;
  $('#lesson-nav').innerHTML = '<p class="lesson-summary">학습 체크 ' + done + ' / ' + activeCourse.lessons.length + ' 레슨</p>' + activeCourse.lessons.map((lesson, index) => '<button class="lesson-button" type="button" data-lesson="' + index + '"' + (index === activeLessonIndex ? ' aria-current="step"' : '') + '><span class="lesson-dot ' + (completed.has(lesson.id) ? 'done' : '') + '">' + (completed.has(lesson.id) ? '✓' : String(index + 1).padStart(2, '0')) + '</span><span>' + escapeHTML(lesson.title) + '</span></button>').join('') + '<p class="lesson-outcome"><strong>이 과정의 산출물</strong>' + escapeHTML(activeCourse.outcome) + '</p>';
}
function renderLesson() {
  const lesson = activeCourse.lessons[activeLessonIndex];
  $('#lesson-content').innerHTML = '<p class="lesson-index">LESSON ' + String(activeLessonIndex + 1).padStart(2, '0') + ' / ' + activeCourse.lessons.length + '</p><h3 tabindex="-1" id="lesson-title">' + escapeHTML(lesson.title) + '</h3>' + (activeCourse.review ? '<div class="lesson-warning"><strong>사내 공식 가이드 확인 필요</strong><br />아래는 도구 독립적인 설계·점검 학습입니다. ABC Lab·Works AI의 실제 기능, 메뉴 경로, 인증 방식은 검증되지 않았습니다. 실제 생성·연동 절차로 사용하지 마세요.</div>' : '') + '<p class="lesson-intro">' + escapeHTML(lesson.intro) + '</p><ul class="lesson-points">' + lesson.points.map((point) => '<li>' + escapeHTML(point) + '</li>').join('') + '</ul><div class="lesson-task"><strong>직접 해보기</strong><p>' + escapeHTML(lesson.task) + '</p></div><div class="lesson-bottom"><label class="lesson-check"><input id="lesson-complete" type="checkbox"' + (completed.has(lesson.id) ? ' checked' : '') + ' />이 레슨 학습 확인</label><button class="button primary" id="next-lesson" type="button">' + (activeLessonIndex < activeCourse.lessons.length - 1 ? '다음 레슨 →' : '과정 목록으로 →') + '</button></div><p class="lesson-save-note">자가 학습 체크입니다. 이 브라우저에만 저장되며 공식 수료를 의미하지 않습니다.</p>';
}
$('#course-filters').addEventListener('click', (event) => {
  const button = event.target.closest('[data-category]');
  if (!button) return;
  selectedCategory = button.dataset.category;
  $('#course-filters').querySelectorAll('button').forEach((item) => item.setAttribute('aria-pressed', String(item === button)));
  renderCourses();
});
$('#course-search').addEventListener('input', (event) => { searchQuery = event.target.value; renderCourses(); });
$('#clear-filters').addEventListener('click', () => { selectedCategory = '전체'; searchQuery = ''; $('#course-search').value = ''; renderFilters(); renderCourses(); });
for (const selector of ['#course-grid', '#roadmap']) $(selector).addEventListener('click', (event) => { const button = event.target.closest('[data-open]'); if (button) openCourse(button.dataset.open); });
$('#resume-learning').addEventListener('click', () => { const next = courses.find((course) => course.lessons.some((lesson) => !completed.has(lesson.id))) || courses[0]; openCourse(next.id); });
$('#close-course').addEventListener('click', () => dialog.close());
$('#lesson-nav').addEventListener('click', (event) => { const button = event.target.closest('[data-lesson]'); if (!button) return; activeLessonIndex = Number(button.dataset.lesson); renderLessonNav(); renderLesson(); $('#lesson-title').focus({preventScroll:true}); });
$('#lesson-content').addEventListener('change', (event) => {
  if (event.target.id !== 'lesson-complete') return;
  const lesson = activeCourse.lessons[activeLessonIndex];
  if (event.target.checked) completed.add(lesson.id); else completed.delete(lesson.id);
  saveProgress(); renderLessonNav(); updateLearning(); renderCourses();
});
$('#lesson-content').addEventListener('click', (event) => {
  if (!event.target.closest('#next-lesson')) return;
  if (activeLessonIndex === activeCourse.lessons.length - 1) { dialog.close(); return; }
  activeLessonIndex++; renderLessonNav(); renderLesson(); $('#lesson-title').focus({preventScroll:true});
});
$('#template-grid').addEventListener('click', async (event) => {
  const button = event.target.closest('[data-copy]');
  if (!button) return;
  const template = templates.find((item) => item.id === button.dataset.copy);
  try { await navigator.clipboard.writeText(template.text); $('#copy-status').textContent = '“' + template.title + '” 프롬프트를 복사했어요. 입력자료를 바꿔 사용하세요.'; }
  catch { $('#copy-status').textContent = '자동 복사가 허용되지 않았어요. “프롬프트 내용 보기”를 열어 직접 복사하세요.'; button.closest('article').querySelector('details').open = true; }
});

let sceneController;
try { sceneController = initScene($('#scene'), brand.colors); document.documentElement.classList.add('scene-ready'); }
catch (error) { document.documentElement.classList.add('scene-fallback'); console.error('3D 장면을 표시하지 못했습니다.', error); }
const motionButton = $('#motion-toggle');
const motionPreference = matchMedia('(prefers-reduced-motion: reduce)');
let userReduced = false;
function updateMotion() {
  const reduced = userReduced || motionPreference.matches;
  document.documentElement.classList.toggle('reduce-motion', reduced);
  motionButton.setAttribute('aria-pressed', String(reduced));
  motionButton.textContent = reduced ? '모션 켜기' : '모션 줄이기';
  motionButton.disabled = motionPreference.matches;
  sceneController?.setReduced(reduced);
}
motionButton.addEventListener('click', () => { userReduced = !userReduced; updateMotion(); });
motionPreference.addEventListener('change', updateMotion);
let framePending = false;
function updateSceneProgress() { sceneController?.update(Math.min(1, Math.max(0, scrollY / Math.max(1, $('#hero').offsetHeight)))); }
window.addEventListener('scroll', () => { if (framePending) return; framePending = true; requestAnimationFrame(() => { updateSceneProgress(); framePending = false; }); }, { passive:true });
window.addEventListener('resize', updateSceneProgress);
renderFilters(); renderCourses(); updateLearning(); updateMotion(); updateSceneProgress();
initGlossary();

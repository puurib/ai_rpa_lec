import { glossaryTerms } from './glossary-data.js';

export function initGlossary() {
  const $ = (selector) => document.querySelector(selector);
  const html = (value) => String(value).replace(/[&<>"']/g, (char) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[char]));
  const dialog = $('#glossary-dialog');
  const search = $('#glossary-search');
  const termList = $('#glossary-term-list');
  let selectedId = glossaryTerms[0].id;
  const findTerm = (id) => glossaryTerms.find((term) => term.id === id);
  const featuredIds = ['ai', 'llm', 'prompt', 'agent', 'api', 'packet', 'token', 'rag'];

  $('#glossary-cards').innerHTML = featuredIds.map((id) => {
    const term = findTerm(id);
    return '<button class="glossary-card" type="button" data-glossary-open="' + term.id + '" aria-haspopup="dialog" aria-controls="glossary-dialog" aria-label="' + html(term.name) + ' 쉬운 설명 보기"><span class="glossary-card-top"><strong>' + html(term.name) + '</strong><span aria-hidden="true">↗</span></span><small>' + html(term.pronunciation) + '</small><p>' + html(term.tagline) + '</p></button>';
  }).join('');
  $('#open-glossary').innerHTML = '전체 ' + glossaryTerms.length + '개 용어 보기 <span aria-hidden="true">↗</span>';

  function renderTermList() {
    const query = search.value.trim().toLocaleLowerCase('ko');
    const filtered = glossaryTerms.filter((term) => [term.name, term.korean, term.pronunciation, term.english, term.category, term.tagline].join(' ').toLocaleLowerCase('ko').includes(query));
    $('#glossary-search-count').textContent = query ? '검색 결과 ' + filtered.length + '개 / 전체 ' + glossaryTerms.length + '개' : '전체 ' + glossaryTerms.length + '개 용어';
    $('#glossary-empty').hidden = filtered.length > 0;
    termList.innerHTML = filtered.map((term) => '<button class="glossary-term-button" type="button" data-term="' + term.id + '" aria-current="' + (term.id === selectedId) + '" aria-controls="glossary-definition"><span>' + html(term.name) + '</span><small>' + html(term.category) + '</small></button>').join('');
  }

  function renderDefinition() {
    const term = findTerm(selectedId);
    const index = glossaryTerms.findIndex((item) => item.id === selectedId);
    const related = term.related.map(findTerm).filter(Boolean);
    $('#glossary-definition').innerHTML = '<p class="glossary-term-category">' + html(term.category) + '</p><h3 id="glossary-term-title" tabindex="-1">' + html(term.name) + '</h3><p class="glossary-full-name">' + html(term.english) + '<br />' + html(term.korean) + ' · 읽는 법: ' + html(term.pronunciation) + '</p><p class="glossary-simple">' + html(term.definition) + '</p><section class="glossary-explanation" aria-labelledby="glossary-analogy-title"><h4 id="glossary-analogy-title">일상에 비유하면</h4><p>' + html(term.analogy) + '</p></section><section class="glossary-explanation" aria-labelledby="glossary-example-title"><h4 id="glossary-example-title">업무에서는 이렇게</h4><p>' + html(term.example) + '</p></section><aside class="glossary-caution"><h4>헷갈리지 마세요</h4><p>' + html(term.caution) + '</p></aside><div class="glossary-related"><p>함께 알아두면 좋은 단어</p><div>' + related.map((item) => '<button type="button" data-related="' + item.id + '">' + html(item.name) + ' ↗</button>').join('') + '</div></div><div class="glossary-bottom"><button type="button" data-glossary-step="-1"' + (index === 0 ? ' disabled' : '') + '>← 이전 단어</button><span>' + (index + 1) + ' / ' + glossaryTerms.length + '</span><button type="button" data-glossary-step="1"' + (index === glossaryTerms.length - 1 ? ' disabled' : '') + '>다음 단어 →</button></div><p class="glossary-analogy-note">비유는 이해를 돕기 위한 설명이며, 실제 기술의 모든 특징을 나타내지는 않습니다.</p>';
  }

  function selectTerm(id, clearSearch = false) {
    if (!findTerm(id)) return;
    selectedId = id;
    if (clearSearch) search.value = '';
    renderTermList();
    renderDefinition();
    if (!dialog.open) dialog.showModal();
    $('#glossary-term-title').focus();
    termList.querySelector('[aria-current="true"]')?.scrollIntoView({ block: 'nearest', inline: 'nearest' });
  }
  $('#glossary-cards').addEventListener('click', (event) => {
    const button = event.target.closest('[data-glossary-open]');
    if (button) selectTerm(button.dataset.glossaryOpen, true);
  });
  $('#open-glossary').addEventListener('click', () => selectTerm('ai', true));
  $('#close-glossary').addEventListener('click', () => dialog.close());
  termList.addEventListener('click', (event) => {
    const button = event.target.closest('[data-term]');
    if (button) selectTerm(button.dataset.term);
  });
  search.addEventListener('input', renderTermList);
  $('#glossary-clear').addEventListener('click', () => { search.value = ''; renderTermList(); search.focus(); });
  $('#glossary-definition').addEventListener('click', (event) => {
    const related = event.target.closest('[data-related]');
    if (related) { selectTerm(related.dataset.related, true); return; }
    const step = event.target.closest('[data-glossary-step]');
    if (!step || step.disabled) return;
    const index = glossaryTerms.findIndex((term) => term.id === selectedId);
    const next = glossaryTerms[index + Number(step.dataset.glossaryStep)];
    if (next) selectTerm(next.id, true);
  });
  renderTermList();
}

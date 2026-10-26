import { glossaryTerms } from './glossary-data.js';
const esc = value => String(value).replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
export function initGlossary() {
 const $ = s => document.querySelector(s);
 const dialog = $('#glossary-dialog');
 let activeId = glossaryTerms[0].id, category = '전체', pageQuery = '', dialogQuery = '';
 const searchTerms = (query, selected='전체') => glossaryTerms.filter(t => (selected==='전체'||t.category===selected) && [t.name,t.korean,t.english,t.pronunciation,t.tagline].join(' ').toLocaleLowerCase().includes(query.trim().toLocaleLowerCase()));
 const categories = ['전체',...new Set(glossaryTerms.map(t=>t.category))];
 $('#term-page-filters').innerHTML = categories.map(c=>'<button type="button" class="filter" data-term-category="'+esc(c)+'" aria-pressed="'+(c===category)+'">'+esc(c)+'</button>').join('');
 function renderCards() {
  const terms = searchTerms(pageQuery,category);
  $('#glossary-cards').innerHTML = terms.map(t=>'<button type="button" class="glossary-card" data-term="'+esc(t.id)+'"><span class="glossary-card-top"><strong>'+esc(t.name)+'</strong><span aria-hidden="true">↗</span></span><small>'+esc(t.korean)+'</small><p>'+esc(t.tagline)+'</p></button>').join('');
  $('#term-page-count').textContent = terms.length+'개 용어 / 전체 '+glossaryTerms.length+'개';
  $('#term-page-empty').hidden = terms.length>0;
 }
 function renderList() {
  const terms = searchTerms(dialogQuery);
  $('#glossary-search-count').textContent = terms.length+'개 용어';
  $('#glossary-term-list').innerHTML = terms.length ? terms.map(t=>'<button type="button" class="glossary-term-button" data-term="'+esc(t.id)+'" aria-current="'+(activeId===t.id)+'"><span>'+esc(t.name)+'</span><small>'+esc(t.pronunciation)+'</small></button>').join('') : '<p class="glossary-empty">일치하는 용어가 없어요. 검색어를 줄여보세요.</p>';
 }
 function renderDefinition(focus) {
  const term = glossaryTerms.find(t=>t.id===activeId);
  const index = glossaryTerms.indexOf(term);
  $('#glossary-definition').innerHTML = '<p class="glossary-term-category">'+esc(term.category)+'</p><h3 id="glossary-term-title" tabindex="-1">'+esc(term.name)+'</h3><p class="glossary-full-name">'+esc(term.english)+' · '+esc(term.pronunciation)+'</p><p class="glossary-simple">'+esc(term.definition)+'</p><section class="glossary-explanation"><h4>익숙한 말로 바꾸면</h4><p>'+esc(term.analogy)+'</p></section><section class="glossary-explanation"><h4>업무에서는 이렇게</h4><p>'+esc(term.example)+'</p></section><section class="glossary-caution"><h4>이 점은 기억해요</h4><p>'+esc(term.caution)+'</p></section><div class="glossary-related"><p>함께 보면 좋은 말</p><div>'+term.related.map(id=>glossaryTerms.find(t=>t.id===id)).filter(Boolean).map(t=>'<button type="button" data-term="'+esc(t.id)+'">'+esc(t.name)+'</button>').join('')+'</div></div><div class="glossary-bottom"><button type="button" data-term-step="-1"'+(index===0?' disabled':'')+'>← 이전 용어</button><span>'+(index+1)+' / '+glossaryTerms.length+'</span><button type="button" data-term-step="1"'+(index===glossaryTerms.length-1?' disabled':'')+'>다음 용어 →</button></div><p class="glossary-analogy-note">비유는 이해를 돕는 예시이며 실제 기술의 모든 특성을 나타내지는 않아요.</p>';
  renderList();
  if(focus){ dialog.scrollTop=0; $('#glossary-term-title').focus({preventScroll:true}); }
 }
 function openTerm(id) {
  if(!glossaryTerms.some(t=>t.id===id)) return;
  activeId=id;
  if(!dialog.open){ dialogQuery=''; $('#glossary-search').value=''; renderDefinition(false); dialog.showModal(); }
  renderDefinition(true);
 }
 document.addEventListener('click',event=>{
  const termButton=event.target.closest('[data-term]');
  if(termButton)openTerm(termButton.dataset.term);
  const step=event.target.closest('[data-term-step]');
  if(step){const index=glossaryTerms.findIndex(t=>t.id===activeId)+Number(step.dataset.termStep); if(glossaryTerms[index])openTerm(glossaryTerms[index].id);}
 });
 $('#close-glossary').addEventListener('click',()=>dialog.close());
 $('#glossary-search').addEventListener('input',event=>{dialogQuery=event.target.value;renderList();});
 $('#term-page-search').addEventListener('input',event=>{pageQuery=event.target.value;renderCards();});
 $('#term-page-filters').addEventListener('click',event=>{const b=event.target.closest('[data-term-category]');if(!b)return;category=b.dataset.termCategory;$('#term-page-filters').querySelectorAll('button').forEach(item=>item.setAttribute('aria-pressed',String(item===b)));renderCards();});
 renderCards(); renderList(); renderDefinition(false);
 return {openTerm};
}

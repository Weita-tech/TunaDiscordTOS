const tabs = [...document.querySelectorAll('[role="tab"]')];
const panels = [...document.querySelectorAll('[role="tabpanel"]')];
function selectPage(page, updateHash = false) {
  const selected = page === 'rules' ? 'rules' : 'privacy';
  document.querySelectorAll('[data-page]').forEach(control => {
    const active = control.dataset.page === selected;
    control.classList.toggle('active', active);
    if (control.getAttribute('role') === 'tab') {
      control.setAttribute('aria-selected', String(active));
      control.tabIndex = active ? 0 : -1;
    }
  });
  panels.forEach(panel => { panel.hidden = panel.id !== `panel-${selected}`; });
  const sections = document.querySelectorAll(`#panel-${selected} section`);
  const toc = document.getElementById('toc');
  toc.replaceChildren(...[...sections].map(section => {
    const link = document.createElement('a');
    link.href = `#${section.id}`;
    link.textContent = section.dataset.title;
    return link;
  }));
  if (updateHash) history.replaceState(null, '', `#${selected}`);
}
document.querySelectorAll('[data-page]').forEach(control => control.addEventListener('click', event => {
  event.preventDefault();
  selectPage(control.dataset.page, true);
  if (control.tagName === 'A') document.getElementById('document').scrollIntoView();
}));
tabs.forEach((tab, index) => tab.addEventListener('keydown', event => {
  if (!['ArrowLeft', 'ArrowRight', 'Home', 'End'].includes(event.key)) return;
  event.preventDefault();
  const next = event.key === 'Home' ? 0 : event.key === 'End' ? tabs.length - 1 : (index + (event.key === 'ArrowRight' ? 1 : -1) + tabs.length) % tabs.length;
  selectPage(tabs[next].dataset.page, true);
  tabs[next].focus();
}));
function readHash() {
  const hash = location.hash.slice(1);
  const target = document.getElementById(hash);
  const parent = target?.closest('[role="tabpanel"]');
  if (parent) selectPage(parent.id.replace('panel-', ''));
  else if (hash === 'rules' || hash === 'privacy') selectPage(hash);
}
selectPage('privacy');
readHash();
window.addEventListener('hashchange', readHash);

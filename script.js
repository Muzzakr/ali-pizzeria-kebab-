// Menu tabs
document.querySelectorAll('.tab').forEach(tab => {
  tab.addEventListener('click', () => {
    document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
    document.querySelectorAll('.menu-grid').forEach(g => g.classList.add('hidden'));
    tab.classList.add('active');
    document.getElementById('tab-' + tab.dataset.tab).classList.remove('hidden');
  });
});

// Mobile nav
document.getElementById('hamburger').addEventListener('click', () => {
  document.getElementById('navMobile').classList.toggle('open');
});

document.querySelectorAll('.nav-mobile a').forEach(link => {
  link.addEventListener('click', () => {
    document.getElementById('navMobile').classList.remove('open');
  });
});

// Reviews show more
(function() {
  const grid = document.getElementById('reviewsGrid');
  const btn = document.getElementById('showMoreBtn');
  if (!grid || !btn) return;

  const cards = Array.from(grid.querySelectorAll('.review-card'));
  const perPage = 6;
  let shown = perPage;

  cards.forEach((card, i) => {
    if (i >= perPage) card.classList.add('hidden-review');
  });

  if (cards.length <= perPage) btn.style.display = 'none';

  btn.addEventListener('click', () => {
    const next = shown + perPage;
    cards.slice(shown, next).forEach(c => c.classList.remove('hidden-review'));
    shown = next;
    if (shown >= cards.length) btn.style.display = 'none';
  });
})();

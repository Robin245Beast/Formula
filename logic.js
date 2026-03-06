// Reveal on scroll
const ro = new IntersectionObserver(entries => {
  entries.forEach((e, i) => {
    if (e.isIntersecting) setTimeout(() => e.target.classList.add('on'), i * 90);
  });
}, { threshold: 0.08 });
document.querySelectorAll('.reveal').forEach(el => ro.observe(el));

// Filter
function filterTeams(group, btn) {
  document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  document.querySelectorAll('.team-card').forEach(card => {
    if (group === 'all' || card.dataset.group === group) {
      card.style.display = '';
      card.style.opacity = '1';
    } else {
      card.style.display = 'none';
    }
  });
}
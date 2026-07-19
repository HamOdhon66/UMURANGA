document.addEventListener('DOMContentLoaded', () => {
  const currentPath = window.location.pathname;
  document.querySelectorAll('.menu a').forEach(link => {
    if (link.getAttribute('href') === currentPath) link.classList.add('active');
  });

  const hero = document.querySelector('.hero');
  if (hero) {
    const greet = document.createElement('div');
    greet.textContent = "Welcome to UMURANGA — Connecting Skills with Opportunities!";
    greet.style.marginTop = "20px";
    greet.style.fontWeight = "600";
    hero.appendChild(greet);
  }

  document.querySelectorAll('.image').forEach(card => {
    card.addEventListener('mouseenter', () => card.style.transform = 'scale(1.08)');
    card.addEventListener('mouseleave', () => card.style.transform = 'scale(1)');
  });
});

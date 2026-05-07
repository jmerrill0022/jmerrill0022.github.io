/* =============================================
   MAIN SITE JS — nav toggle, scroll active states
   ============================================= */

document.addEventListener('DOMContentLoaded', function () {

  // Mobile nav toggle
  const toggle = document.querySelector('.nav-toggle');
  const navLinks = document.querySelector('.nav-links');
  if (toggle && navLinks) {
    toggle.addEventListener('click', () => {
      navLinks.classList.toggle('open');
    });
  }

  // Active nav link on scroll
  const sections = document.querySelectorAll('section[id]');
  const links = document.querySelectorAll('.nav-links a[href*="#"]');

  function updateActive() {
    let current = '';
    sections.forEach(section => {
      const top = section.offsetTop - 120;
      if (window.scrollY >= top) current = section.id;
    });
    links.forEach(link => {
      link.style.color = link.getAttribute('href').includes(current) && current
        ? 'var(--text)'
        : '';
    });
  }

  window.addEventListener('scroll', updateActive, { passive: true });
});

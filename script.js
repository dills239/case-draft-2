document.addEventListener('DOMContentLoaded', () => {
  // Hero letter-by-letter animation
  const heroHeading = document.querySelector('#home h1');
  if (heroHeading) {
    const text = heroHeading.textContent;
    heroHeading.innerHTML = '';
    text.split('').forEach((char, i) => {
      const span = document.createElement('span');
      span.textContent = char;
      span.style.opacity = '0';
      span.style.display = 'inline-block';
      span.style.transition = `opacity 0.3s ease ${i * 0.1}s`;
      heroHeading.appendChild(span);
    });
    setTimeout(() => {
      heroHeading.querySelectorAll('span').forEach(span => {
        span.style.opacity = '1';
      });
    }, 500);
  }

  // Scroll-fade animations
  const sections = document.querySelectorAll('section');
  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        obs.unobserve(entry.target);
      }
    });
  }, { threshold: 0.2 });
  sections.forEach(sec => observer.observe(sec));

  // Nav-link highlighting
  const links = document.querySelectorAll('nav .menu a');
  const current = window.location.pathname.split('/').pop() || 'index.html';
  links.forEach(link => {
    if (link.getAttribute('href') === current) {
      link.classList.add('active');
    }
  });
});
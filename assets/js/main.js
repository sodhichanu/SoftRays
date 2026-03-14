const menuBtn = document.querySelector('.menu-toggle');
const nav = document.querySelector('.site-nav');

if (menuBtn && nav) {
  menuBtn.addEventListener('click', () => {
    nav.classList.toggle('open');
  });
}

const form = document.getElementById('contactForm');
const formNote = document.getElementById('formNote');

if (form && formNote) {
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    formNote.textContent = 'Thanks. Your inquiry has been captured. We will contact you shortly.';
    form.reset();
  });
}

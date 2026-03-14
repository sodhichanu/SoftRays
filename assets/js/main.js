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

const requirementForm = document.getElementById('requirementForm');
const requirementNote = document.getElementById('requirementNote');

if (requirementForm && requirementNote) {
  requirementForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const formData = new FormData(requirementForm);
    const get = (name) => (formData.get(name) || '').toString().trim();

    const subject = `Client Requirement - ${get('company') || 'New Inquiry'}`;
    const bodyLines = [
      `Full Name: ${get('full_name')}`,
      `Email: ${get('email')}`,
      `Company: ${get('company')}`,
      `Industry: ${get('industry')}`,
      `Software Goal: ${get('software_goal')}`,
      `Project Type: ${get('project_type')}`,
      `Platforms: ${get('platforms')}`,
      `Key Features: ${get('key_features')}`,
      `Expected Users: ${get('user_volume')}`,
      `Budget Range: ${get('budget_range')}`,
      `Preferred Start Time: ${get('start_time')}`,
      `Need NDA: ${get('nda')}`,
      `Integrations: ${get('integrations')}`,
      `Additional Notes: ${get('notes')}`,
    ];

    const mailto = `mailto:hello@softraysglobal.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(bodyLines.join('\\n'))}`;
    window.location.href = mailto;

    requirementNote.textContent = 'Requirement captured. Your email app should open now to send the details.';
    requirementForm.reset();
  });
}

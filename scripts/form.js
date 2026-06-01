document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('signupForm');
  const status = document.getElementById('form-status');

  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const formData = new FormData(form);
      const data = Object.fromEntries(formData.entries());
      console.log('Form Data:', data);

      if (status) {
        status.textContent = `Thanks ${data.name || 'applicant'} — we received your application. We'll be in touch at ${data.phone || data.email || ''}.`;
        status.classList.add('show');
        status.setAttribute('tabindex', '-1');
        status.focus();
      }

      form.reset();
    });
  }
});

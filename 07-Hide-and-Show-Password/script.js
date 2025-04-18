// script.js
const passwordInput = document.getElementById('password');
const toggleBtn = document.querySelector('.toggle-password');
const eyeIcon = toggleBtn.querySelector('.eye-icon');

toggleBtn.addEventListener('click', () => {
  const type = passwordInput.getAttribute('type');
  if (type === 'password') {
    passwordInput.setAttribute('type', 'text');
    eyeIcon.textContent = '🙈'; // Change icon to indicate hidden mode
    toggleBtn.setAttribute('aria-label', 'Hide password');
  } else {
    passwordInput.setAttribute('type', 'password');
    eyeIcon.textContent = '👁️'; // Back to visible mode
    toggleBtn.setAttribute('aria-label', 'Show password');
  }
});

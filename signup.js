document.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('.signup-box form');
  if (!form) return;

  const passwordInput = form.querySelector('input[type="password"]');
  const confirmInput = form.querySelectorAll('input[type="password"]')[1];
  const feedback = document.createElement('p');
  feedback.style.marginTop = '10px';
  feedback.style.fontSize = '0.9rem';
  form.appendChild(feedback);

  form.addEventListener('input', () => {
    if (passwordInput.value !== confirmInput.value) {
      feedback.textContent = '⚠️ Passwords do not match';
      feedback.style.color = '#ffd700';
    } else {
      feedback.textContent = '✅ Passwords match';
      feedback.style.color = '#00ff99';
    }
  });

  form.addEventListener('submit', e => {
    if (passwordInput.value !== confirmInput.value) {
      e.preventDefault();
      alert('Passwords do not match!');
    } else {
      alert('Account created successfully!');
    }
  });
});

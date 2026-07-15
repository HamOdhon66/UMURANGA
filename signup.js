const form = document.querySelector('.signup-box form');

if (form) {
  form.addEventListener('submit', (e) => {
    const password = form.querySelector('input[type="password"]').value;
    const confirmPassword = form.querySelectorAll('input[type="password]')[1].value;

    if (password !== confirmPassword) {
      e.preventDefault();
      alert('Passwords do not match!');
    }
  });
}
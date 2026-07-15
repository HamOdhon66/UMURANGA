const editBtn = document.getElementById('editBtn');
const logoutBtn = document.getElementById('logoutBtn');

if (editBtn) {
  editBtn.addEventListener('click', () => {
    alert('Edit profile feature coming soon!');
  });
}

if (logoutBtn) {
  logoutBtn.addEventListener('click', () => {
    alert('You have been signed out.');
    window.location.href = 'index.html'; // redirect to home
  });
}
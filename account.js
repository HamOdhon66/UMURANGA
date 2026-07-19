document.addEventListener('DOMContentLoaded', () => {
  const editBtn = document.getElementById('editBtn');
  const logoutBtn = document.getElementById('logoutBtn');
  const profilePhoto = document.querySelector('.profile-photo img');

  if (profilePhoto) {
    profilePhoto.addEventListener('click', () => {
      alert('Profile photo clicked! You can change this soon.');
    });
  }

  if (editBtn) {
    editBtn.addEventListener('click', () => {
      alert('Edit profile feature coming soon!');
      editBtn.style.backgroundColor = '#ffd700';
      editBtn.textContent = 'Editing...';
      setTimeout(() => {
        editBtn.style.backgroundColor = '#47798d';
        editBtn.textContent = 'Edit Profile';
      }, 1500);
    });
  }

  if (logoutBtn) {
    logoutBtn.addEventListener('click', () => {
      alert('You have been signed out.');
      document.body.style.opacity = '0.6';
      setTimeout(() => window.location.href = 'index.html', 1000);
    });
  }
});

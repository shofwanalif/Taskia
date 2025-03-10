// Controller signIn

document.addEventListener('DOMContentLoaded', () => {
  const userForm = document.getElementById('userForm');
  const userManager = new User();

  userForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const usernameByInput = document.getElementById('username').value;

    const result = userManager.sigInUser(usernameByInput);
    if (result.success) {
      alert('login successful');
      localStorage.setItem('usernameLogedIn', usernameByInput);
      return (window.location.href = '../tasks.html');
    } else {
      alert('Failed to login');
    }
    userForm.reset();
  });
});

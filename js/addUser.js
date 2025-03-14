// Controller add user

document.addEventListener('DOMContentLoaded', () => {
  const userForm = document.getElementById('userForm');
  const userManager = new User();

  userForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const userData = {
      username: document.getElementById('username').value,
    };

    const result = userManager.saveUser(userData);
    if (result.success) {
      return (window.location.href = '../signin.html');
    } else {
      alert('Failed to add user');
    }
    userForm.reset();
  });
});

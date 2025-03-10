// Controller add user

document.addEventListener('DOMContentLoaded', () => {
  const taskForm = document.getElementById('taskForm');
  const taskManager = new Task();

  taskForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const taskData = {
      taskname: document.getElementById('taskName').value,
      taskpriority: document.getElementById('taskPriority').value,
    };

    const result = taskManager.saveTask(taskData);
    if (result.success) {
      //   return (window.location.href = '../signin.html');
      alert('Task added successfully');
    } else {
      alert('Failed to add user');
    }
    taskForm.reset();
  });
});

// Model for tasks
class Task {
  constructor() {
    this.tasks = this.getTasks();
  }

  saveTask(taskData) {
    const newTask = {
      id: Date.now(),
      isCompleted: false,
      createdat: new Date().toLocaleDateString('id-ID'),
      ...taskData,
    };

    this.tasks.push(newTask);
    localStorage.setItem('tasks', JSON.stringify(this.tasks));

    return {
      success: true,
    };
  }

  getTasks() {
    return JSON.parse(localStorage.getItem('tasks') || '[]');
  }

  completedTask(taskId) {
    console.log(taskId);
    const index = this.tasks.findIndex((task) => task.id === taskId);

    if (index !== -1) {
      this.tasks[index].isCompleted = true;
      localStorage.setItem('tasks', JSON.stringify(this.tasks));
    }
  }

  deleteTask(taskId) {
    console.log(taskId);
    const index = this.tasks.findIndex((task) => task.id === taskId);

    if (index !== -1) {
      this.tasks.splice(index, 1);
      localStorage.setItem('tasks', JSON.stringify(this.tasks));
    }
  }
}

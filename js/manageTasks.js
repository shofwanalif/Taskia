// Controller manage tasks
document.addEventListener('DOMContentLoaded', () => {
  const myTasks = new Task();

  const existingTasks = myTasks.getTasks();

  const taskWrapper = document.getElementById('taskWrapper');
  const taskWrappperEmpty = document.getElementById('taskWrapperEmpty');

  function displayAllTasks(task = existingTasks) {
    if (task.length === 0) {
      taskWrappperEmpty.className = 'flex justify-center items-center h-[420px] mx-auto';
      taskWrapper.className = 'hidden';
    } else {
      taskWrapper.innerHTML = '';
      taskWrappperEmpty.className = 'hidden';

      task.forEach((task) => {
        const itemTask = document.createElement('div');
        itemTask.className = 'flex justify-between bg-white p-5 w-full rounded-3xl';

        itemTask.innerHTML = `
      <div class="task-card flex flex-col gap-5">
                            <div class="flex gap-3 items-center">
                                <div
                                    class="w-[50px] h-[50px] flex shrink-0 items-center justify-center bg-[#BDEBFF] rounded-full">
                                    <img src="img/icons/ghost.svg" alt="icon">
                                </div>
                                <div class="flex flex-col">
                                    <p class="font-bold text-lg leading-[27px]">${task.taskname}</p>
                                    <p class="text-sm leading-[21px] text-taskia-grey">Created at ${task.createdat}</p>
                                </div>
                            </div>
                            <div class="flex gap-4 font-semibold text-sm leading-[21px]">
                                <div class="flex gap-1 items-center">
                                    <div class="flex shrink-0 w-5 h-5">
                                        <img src="img/icons/layer.svg" alt="icon">
                                    </div>
                                    <p>${task.taskpriority}</p>
                                </div>

                                ${
                                  task.isCompleted === false
                                    ? `<div class="flex gap-1 items-center">
                                    <div class="flex shrink-0 w-5 h-5">
                                        <svg width="20" height="21" viewBox="0 0 20 21" fill="none"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <path d="M4.29163 2.16663V18.8333" stroke="currentColor" stroke-width="2"
                                                stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                                            <path
                                                d="M4.29163 3.83337H13.625C15.875 3.83337 16.375 5.08337 14.7916 6.66671L13.7916 7.66671C13.125 8.33337 13.125 9.41671 13.7916 10L14.7916 11C16.375 12.5834 15.7916 13.8334 13.625 13.8334H4.29163"
                                                stroke="currentColor" stroke-width="2" stroke-miterlimit="10"
                                                stroke-linecap="round" stroke-linejoin="round" />
                                        </svg>
                                    </div>
                                    <p>In Progress</p>
                                </div>`
                                    : `<div class="flex gap-1 items-center text-taskia-green">
                                    <div class="flex shrink-0 w-5 h-5">
                                        <svg width="20" height="21" viewBox="0 0 20 21" fill="none"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <path d="M4.29163 2.16663V18.8333" stroke="currentColor" stroke-width="2"
                                                stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                                            <path
                                                d="M4.29163 3.83337H13.625C15.875 3.83337 16.375 5.08337 14.7916 6.66671L13.7916 7.66671C13.125 8.33337 13.125 9.41671 13.7916 10L14.7916 11C16.375 12.5834 15.7916 13.8334 13.625 13.8334H4.29163"
                                                stroke="currentColor" stroke-width="2" stroke-miterlimit="10"
                                                stroke-linecap="round" stroke-linejoin="round" />
                                        </svg>
                                    </div>
                                    <p>Completed</p>
                                </div>`
                                }
                            </div>
                        </div>
                        <div class="flex flex-row items-center gap-x-3">
                            <a href="#" id="deleteTask-${task.id}"
                                class="my-auto font-semibold text-taskia-red border border-taskia-red p-[12px_20px] h-12 rounded-full">Delete</a>
                            ${
                              task.isCompleted === false
                                ? `<a href="#" id="completeTask-${task.id}"
                                class="flex gap-[10px] justify-center items-center text-white p-[12px_20px] h-12 font-semibold bg-gradient-to-b from-[#977FFF] to-[#6F4FFF] rounded-full w-full border border-taskia-background-grey">Complete</a>`
                                : `<a href="#" id="completeTask-${task.id}"
                                class="hidden">Complete</a>`
                            }
                        </div>`;

        taskWrapper.appendChild(itemTask);
        itemTask.querySelector(`#completeTask-${task.id}`).addEventListener(`click`, (e) => {
          e.preventDefault();

          myTasks.completedTask(task.id);
          const updateTasks = myTasks.getTasks();
          displayAllTasks(updateTasks);
        });

        itemTask.querySelector(`#deleteTask-${task.id}`).addEventListener(`click`, (e) => {
          e.preventDefault();

          myTasks.deleteTask(task.id);
          const updateTasks = myTasks.getTasks();
          displayAllTasks(updateTasks);
        });
      });
    }
  }

  displayAllTasks();
});

document.getElementById('addTaskButton').addEventListener('click', function() {
    const taskInput = document.getElementById('taskInput');
    const taskText = taskInput.value;
    if (taskText === '') return;

    const taskList = document.getElementById('taskList');
    const newTask = document.createElement('li');
    newTask.textContent = taskText;
    newTask.addEventListener('click', function() {
        newTask.classList.toggle('completed');
    });
    taskList.appendChild(newTask);

    taskInput.value = '';
});

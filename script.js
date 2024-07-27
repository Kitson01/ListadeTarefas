document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('addTaskButton').addEventListener('click', addTask);
    document.getElementById('taskInput').addEventListener('keypress', (e) => {
        if (e.key === 'Enter') addTask();
    });
});

function addTask() {
    const taskInput = document.getElementById('taskInput');
    const taskText = taskInput.value.trim();
    if (taskText === '') return;

    const taskList = document.getElementById('taskList');
    const newTask = document.createElement('li');

    const taskContent = document.createElement('span');
    taskContent.textContent = taskText;
    taskContent.addEventListener('click', () => {
        taskContent.classList.toggle('completed');
    });

    const actionButtons = document.createElement('div');
    actionButtons.classList.add('action-buttons');

    const deleteButton = document.createElement('i');
    deleteButton.classList.add('fas', 'fa-trash-alt');
    deleteButton.addEventListener('click', () => {
        taskList.removeChild(newTask);
    });

    const editButton = document.createElement('i');
    editButton.classList.add('fas', 'fa-edit');
    editButton.addEventListener('click', () => {
        const newTaskText = prompt('Editar tarefa:', taskContent.textContent);
        if (newTaskText !== null && newTaskText.trim() !== '') {
            taskContent.textContent = newTaskText.trim();
        }
    });

    actionButtons.appendChild(editButton);
    actionButtons.appendChild(deleteButton);
    newTask.appendChild(taskContent);
    newTask.appendChild(actionButtons);
    taskList.appendChild(newTask);

    taskInput.value = '';
}

function loadTasks() {
    const tasks = JSON.parse(localStorage.getItem('arc_tasks')) || [];
    const list = document.getElementById('task-list');
    list.innerHTML = '';
    
    tasks.forEach((task, index) => {
        const div = document.createElement('div');
        div.className = 'task-item';
        div.innerHTML = `
            <span>> ${task}</span>
            <span class="close-btn" onclick="removeTask(${index})">[DONE]</span>
        `;
        list.appendChild(div);
    });
}

function addTask() {
    const input = document.getElementById('new-task');
    const task = input.value.trim();
    
    if (task) {
        const tasks = JSON.parse(localStorage.getItem('arc_tasks')) || [];
        tasks.push(task);
        localStorage.setItem('arc_tasks', JSON.stringify(tasks));
        input.value = '';
        loadTasks();
    }
}

function removeTask(index) {
    const tasks = JSON.parse(localStorage.getItem('arc_tasks')) || [];
    tasks.splice(index, 1);
    localStorage.setItem('arc_tasks', JSON.stringify(tasks));
    loadTasks();
}

loadTasks();
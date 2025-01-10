document.addEventListener("DOMContentLoaded", () => {
    const todoForm = document.getElementById("todo-form");
    const todoInput = document.getElementById("todo-input");
    const todoList = document.getElementById("todo-list");

    // Add new task
    todoForm.addEventListener("submit", (e) => {
        e.preventDefault();
        const taskText = todoInput.value.trim();
        if (taskText) {
            addTask(taskText);
            todoInput.value = "";
        }
    });

    // Function to add a task to the list
    function addTask(taskText) {
        const li = document.createElement("li");
        li.textContent = taskText;

        const deleteBtn = document.createElement("button");
        deleteBtn.textContent = "Delete";
        deleteBtn.addEventListener("click", () => li.remove());

        li.addEventListener("click", () => {
            li.classList.toggle("completed");
        });

        li.appendChild(deleteBtn);
        todoList.appendChild(li);
    }
});

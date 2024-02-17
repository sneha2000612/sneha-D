function addTask() {
    var taskInput = document.getElementById("taskInput");
    var taskText = taskInput.value.trim();

    if (taskText !== "") {
        var tasksList = document.getElementById("tasks");
        var li = document.createElement("li");
        li.innerHTML = '<input type="checkbox"> ' + taskText + '<button onclick="removeTask(this)">Remove</button>';
        tasksList.appendChild(li);

        taskInput.value = "";
    }
}

function removeTask(button) {
    var li = button.parentElement;
    li.parentElement.removeChild(li);
}

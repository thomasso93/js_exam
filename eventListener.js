window.addEventListener('DOMContentLoaded', function () {
    
    var taskList = [];
    
    var taskInputName = document.getElementById('taskName');
    var removeButton  = document.getElementById('removeTask');
    var displayedTasks = document.getElementById('displayedTasks');
    var taskAmount = document.getElementById('taskAmount');
    
    taskInputName.addEventListener('keypress', function (e) {
        var key = e.which || e.keyCode;
        if (key === 13) { 
            addTaskToList();
        }
    });
    
    function addTaskToList() {
        
        var task = {};
        task.name = taskInputName.value;
        taskList.push(task);
        
        var newTask = document.createElement('li');
        
        for (var i=0; i<taskList.length; i++) {
            var taskTemplate = getTaskTemplate(taskList[i].name);
            newTask.innerHTML = taskTemplate;
            displayedTasks.appendChild(newTask);
            updateTaskNumber();
        }
        
        var editButton = newTask.querySelector('.task-edit');
        
        editButton.addEventListener('click', function () {
        var index = taskList.indexOf(task);
            if (index >= 0) {
                var newTaskName = document.querySelector('.singleTask').value;
                task.name = newTaskName;
            }

        });

        var checkbox = newTask.querySelector('.task-checkbox');
        
        checkbox.addEventListener('change', function () {
            alert("Done!")
        });
        
    };
    
    removeButton.addEventListener('click', function() {
        
        if (taskList.length >= 0) {
            var firstTask = displayedTasks.firstChild;
            firstTask.parentNode.removeChild(firstTask);
            taskList.shift();
            updateTaskNumber();
        }
    });
    
    function updateTaskNumber() {
        taskAmount.textContent = taskList.length;
    };
        
       
});
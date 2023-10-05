const toDoForm = document.querySelector('#to-do-form');
const taskList = document.querySelector('#task-list');
const completedList = document.querySelector('#completed-list');
const inputTask = document.querySelector('#input-task');

let tasks = [];

 
function addTask(task) {
  tasks.push(task);
  renderTasks();
}

 
function deleteTask(index) {
  tasks.splice(index, 1);
  renderTasks();
}

function toggleCompleted(index) {
  tasks[index].completed = !tasks[index].completed;
  renderTasks();
}

 
function renderTasks() {
  taskList.innerHTML = '';
  completedList.innerHTML = '';

  for (let i = 0; i < tasks.length; i++) {
    const li = document.createElement('li');
    const taskName = document.createTextNode(tasks[i].name);
    const deleteButton = document.createElement('button');
    const completedCheckbox = document.createElement('input');
    completedCheckbox.setAttribute('type', 'checkbox');
    completedCheckbox.setAttribute('class', 'completed-checkbox');

    
    if (tasks[i].completed) {
      completedCheckbox.checked = true;
      li.classList.add('completed');
      completedList.appendChild(li);
    } else {
      taskList.appendChild(li);
    }

   
    li.appendChild(completedCheckbox);
    li.appendChild(taskName);
    li.appendChild(deleteButton);
    deleteButton.innerHTML = '&times;';
    deleteButton.addEventListener('click', () => deleteTask(i));
    completedCheckbox.addEventListener('change', () => toggleCompleted(i));
  }
}

 
toDoForm.addEventListener('submit', (event) => {
  event.preventDefault();
  const taskName = inputTask.value.trim();
  if (taskName !== '') {
    const task = { name: taskName, completed: false };
    addTask(task);
    inputTask.value = '';
  }
});


var aText = new Array(
    "Level-2 : Task-3", 
    "To Do List"
    );
    var iSpeed = 100; 
    var iIndex = 0;
    var iArrLength = aText[0].length; 
    var iScrollAt = 20; 
     
    var iTextPos = 0; 
    var sContents = ''; 
    var iRow; 
     
    function typewriter()
    {
     sContents =  ' ';
     iRow = Math.max(0, iIndex-iScrollAt);
     var destination = document.getElementById("typedtext");
     
     while ( iRow < iIndex ) {
      sContents += aText[iRow++] + '<br />';
     }
     destination.innerHTML = sContents + aText[iIndex].substring(0, iTextPos) + "_";
     if ( iTextPos++ == iArrLength ) {
      iTextPos = 0;
      iIndex++;
      if ( iIndex != aText.length ) {
       iArrLength = aText[iIndex].length;
       setTimeout("typewriter()", 500);
      }
     } else {
      setTimeout("typewriter()", iSpeed);
     }
    }
    
    
    typewriter();
    
    
    
    
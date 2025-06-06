/* this function gets the task from input*/
function get_todos() {
    var todos = new Array();
    var todos_str = localStorage.getItem('todo');
    if (todos_str !== null) {
        todos = JSON.parse(todos_str);
    }
    return todos;
}

/* this function adds the task to the list */
function add() {
    var task_input = document.getElementById('task').value;

    var todos = get_todos();
    todos.push(task_input);
    localStorage.setItem('todo', JSON.stringify(todos));
    document.getElementById('task').value = '';
    show();

    return false;
}
/* this function shows the task in the list */

function show() {
    var todos = get_todos();
    var html = '<ul>';
    for (var i = 0; i < todos.length; i++) {
        html += '<li>' + todos[i] + ' <button class="remove" id="' + i + '">x</button></li>';
    };
    html += '</ul>';
    document.getElementById('todos').innerHTML = html;

}

document.getElementById('add').addEventListener('click', add);
show();

/* this function removes the task from the list */
function remove() {
    var id = this.getAttribute('id');
    var todos = get_todos();
    todos.splice(id, 1);
    localStorage.setItem('todo', JSON.stringify(todos));
    show();
    return false;
}

var buttons = document.getElementsByClassName('remove');
for (var i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', remove);
}

// Define your function
function myFunction() {
  console.log("Element was double-clicked!");
  // Add other actions you want to perform here
}
// Attach the function to the ondblclick property
myElement.ondblclick = myFunction;
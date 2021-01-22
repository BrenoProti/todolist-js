// Selectors
const todoInput = document.querySelector('.todo-input')
const todoButton = document.querySelector('.todo-button')
const todoList = document.querySelector('.todo-list')

// Event Listeners
todoButton.addEventListener('click', addTodo)
todoList.addEventListener('click', deleteCheck)

// Functions
function addTodo(event) {
    event.preventDefault();

    //Create todo div
    const todoDiv = document.createElement('div');
    todoDiv.classList.add('todo');

    //Create LI
    const newTodo = document.createElement('li')
    newTodo.innerText = todoInput.value;
    newTodo.classList.add('todo-item');
    todoDiv.appendChild(newTodo);

    //Create check button
    const checkButton = document.createElement('button')
    checkButton.innerHTML = '<i class="fas fa-check"></i>';
    checkButton.classList.add('check-btn')
    todoDiv.appendChild(checkButton);

     //Create trash button
     const trashButton = document.createElement('button')
     trashButton.innerHTML = '<i class="fas fa-trash"></i>';
     trashButton.classList.add('trash-btn')
     todoDiv.appendChild(trashButton);

    // Append to list
    todoList.appendChild(todoDiv);

    todoInput.value = ''
}

function deleteCheck(e) {
    const item = e.target;

    // Delete Todo
    if (item.classList[0] === 'trash-btn') {
        const todo = item.parentElement;
        todo.classList.add('fall')
        todo.addEventListener('transitionend', function() {
            todo.remove();
        })
    }

    //Check Mark
    if (item.classList[0] === 'check-btn') {
        const todo = item.parentElement;
        todo.classList.toggle('completed');
    }
}
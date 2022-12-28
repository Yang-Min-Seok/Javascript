const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("#todo-form input");
const toDoList = document.getElementById("todo-list");
const TODOS_KEY = 'todos';

let toDos = [];

function saveToDos() {
    // JSON.stringify -> makes everything str
    localStorage.setItem('todos', JSON.stringify(toDos));
}

function deleteToDo(event) {
    // target -> clicked element
    // the parent of btn is li
    const li = event.target.parentElement;
    // delete
    li.remove()
}

function paintToDo(newTodo) {
    
    // create new element(HTML)
    const li = document.createElement('li');
    const span = document.createElement('span');
    span.innerText = newTodo;
    const btn = document.createElement('button');
    btn.innerText = 'X';
    btn.addEventListener('click', deleteToDo);

    // li > span
    li.appendChild(span);
    
    // append btn at the end of li
    li.appendChild(btn);
    
    // put li inside of toDoList
    toDoList.appendChild(li);

}

function handleToDoSubmit(event) {
    event.preventDefault();
    
    // copy value to const
    const newTodo = toDoInput.value;
    
    // make input box empty
    toDoInput.value = "";

    // push value into list
    toDos.push(newTodo);

    paintToDo(newTodo);

    // save Todo to localstorage
    saveToDos()

}

toDoForm.addEventListener("submit", handleToDoSubmit);

const savedToDos = localStorage.getItem(TODOS_KEY);

if (savedToDos !== null){
    // make str to list
    const parsedToDos = JSON.parse(savedToDos);
    toDos = parsedToDos;
    // send items to paintToDo(function)
    parsedToDos.forEach(paintToDo);
}
const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("#todo-form input");
const toDoList = document.getElementById("todo-list");

function paintToDo(newTodo) {
    
    // create new element(HTML)
    const li = document.createElement('li');
    const span = document.createElement('span');
    // li > span
    li.appendChild(span);
    span.innerText = newTodo;
    // put li inside of toDoList
    toDoList.appendChild(li);

}

function handleToDoSubmit(event) {
    event.preventDefault();
    
    // copy value to const
    const newTodo = toDoInput.value;
    
    // make input box empty
    toDoInput.value = "";

    paintToDo(newTodo);
    
}

toDoForm.addEventListener("submit", handleToDoSubmit);
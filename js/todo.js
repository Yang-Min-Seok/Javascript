const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("#todo-form input");
const toDoList = document.getElementById("todo-list");

function handleToDoSubmit(event) {
    event.preventDefault();
    
    // copy value to const
    const newTodo = toDoInput.value;
    
    // make input box empty
    toDoInput.value = "";
}

toDoForm.addEventListener("submit", handleToDoSubmit);
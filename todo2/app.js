let todos = [
    {
        id: 1,
        title: "Học JS",
    },
    {
        id: 2,
        title: "Làm Todos",
    }
];

let todoEditingIndex = -1;
let todoList = document.querySelector('.list-task');
let inputEle = document.querySelector('.task');

function showTodoList(){

    let todoListContent = "";

    for (let index = 0; index < todos.length; index++){
        todoListContent += `<li onclick="editTodo(${todos[index].id})">
                            <span>${todos[index].title}</span>
                            <span class="delete-item" onclick="removeTodo(${todos[index].id})"> X </span>  
                            </li>`;                           
    }
    todoList.innerHTML = todoListContent;
}

function addTodo(){
    let todoID = todos.length + 1;
    let todo = {
        id: todoID,
        title: inputEle.value
    };
    todos.push(todo);
    showTodoList();
}

function editTodo(id){
    const editTodoIndex = todos.findIndex(item => item.id == id);
    const item = todos[editTodoIndex];
    inputEle.value = item.title;
    todoEditingIndex = editTodoIndex;
}

function submitEdit(){

    if (todoEditingIndex == -1) {
        alert("Ban chua chon item can sua");
        return;
    }

    todos[todoEditingIndex] = {
        id: todos[todoEditingIndex].id,
        title: inputEle.value
    };
    showTodoList();
}

function removeTodo(id){
    event.stopPropagation();
    const editTodoIndex = todos.findIndex(item => item.id == id);
    todos.splice(editTodoIndex, 1);
    showTodoList();
}
showTodoList();


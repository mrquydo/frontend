let tasks = [
    {
        id: 1,
        title: "learn html",
    },
    {
        id: 2,
        title: "learn css",
    },
    {
        id: 3,
        title: "learn js",
    }
];

let listTaskEle = document.querySelector('.list-task');
let taskInputEle = document.querySelector('.task');

function showListTask() {

    let listTaskContent = "";

    for (let index = 0; index < tasks.length; index++) {
        listTaskContent += '<li>' +  tasks[index].title + '</li>';
    }

    listTaskEle.innerHTML = listTaskContent;

}

function makeTodo(id, title) {
    return {
        id: id,
        title: title
    }
}

function addTodo(){
    let taskId = tasks.length + 1;
    let task = makeTodo(taskId, taskInputEle.value);
    tasks.push(task);

    showListTask();
}

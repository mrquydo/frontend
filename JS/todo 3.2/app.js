const UNDONE = 0;
const DONE = 1;
const PROCESSING = 2;
const PAUSE = 3;

let tasks = [ /*Tạo mảng với các keys*/
    {
        id: 1,
        title: "learn html",
        status: DONE,
    },
    {
        id: 2,
        title: "learn css",
        status: UNDONE,
    },
    {
        id: 3,
        title: "learn js 1",
        status: PROCESSING,
    }
];

let taskEditingIndex = -1;


let listTaskEle = document.querySelector('.list-task'); //Đặt biến hiển thị
let taskInputEle = document.querySelector('.task'); // biến lấy value input

function showListTask() { // func hiển thị

    let listTaskContent = ""; //nội dung list task

    for (let index = 0; index < tasks.length; index++) { 

        if (tasks[index].status == DONE) { // Nếu status của task có index = index là done
            listTaskContent += `<li onclick="editTask(${tasks[index].id})"> <del>' 
                                    ${tasks[index].title} '</del>  
                                    <span class="bagde bagde-success"> </span> 
                                    <span class="delete-item" onclick="removeItem(${tasks[index].id})"> x </span>  
                                 </li>`; // nội dung bên trong li: title gạch ngang, badge màu xanh, chạy hàm editTask nếu bấm vào task 
                                 
        }
        else if (tasks[index].status == UNDONE) {

            listTaskContent += `<li onclick="editTask(${tasks[index].id})"> ${tasks[index].title} 
                                <span class="bagde bagde-warning"> </span>  
                                <span class="delete-item" onclick="removeItem(${tasks[index].id})"> x </span> 
                                </li>`;
        }
        else if (tasks[index].status == PROCESSING) {

            listTaskContent += `<li onclick="editTask(${tasks[index].id})"> ${tasks[index].title} 
                                <span class="bagde bagde-primary"> </span>  
                                <span class="delete-item" onclick="removeItem(${tasks[index].id})"> x </span> 
                                </li>`;
        }
        else {
            listTaskContent += `<li onclick="editTask(${tasks[index].id})"> ${tasks[index].title} 
                                <span class="bagde bagde-secondary"> </span> 
                                <span class="delete-item" onclick="removeItem(${tasks[index].id})"> x </span> 
                                </li>`;
        }
    }

    listTaskEle.innerHTML = listTaskContent; //hiển thị vào html

}

// function makeTodo(id, title) {
//     return {
//         id: id,
//         title: title,
//         status: PAUSE
//     }
// }

function addTodo() { // Thêm task vào todo

    let taskId = tasks.length + 1; // Đặt task ID
    let task = {  // tạo thêm giá trị có id và title
        id: taskId,
        title: taskInputEle.value
    };

    tasks.push(task); // thêm task vào phía sau của tasks
    showListTask(); //render lại hàm 
}


function editTask(id) { // Hàm edit có giá trị truyền vào là id


    // update button ==> add --> edit

    // fill data

    const taskIndex = tasks.findIndex(item => item.id == id); //lấy ra index của của item có id = id của task khi click vào, gán vào biến taskIndex
    const item = tasks[taskIndex]; // gán task co index = taskIndex vào item

    taskInputEle.value = item.title; // lấy ra title của item ở trên, đặt bằng value của input

    // cách 1 gán id vào button khi mà click vào item
    // cách 2 gán item vừa chọn edit vào biến taskEditing
    taskEditingIndex = taskIndex;
}

function submitEdit() {  //nút sửa

    if (taskEditingIndex == -1) {
        alert("Ban chua chon item can sua");
        return;
    }

    tasks[taskEditingIndex] = {  // lấy ra task có index = taskEditingIndex 
        id: tasks[taskEditingIndex].id,  // Vẫn giữ id và status như cũ
        status: tasks[taskEditingIndex].status,
        title: taskInputEle.value // title = input value vừa sửa
    };

    showListTask(); //render lại hàm show
}

function removeItem(id) {
    event.stopPropagation(); // Chia ra thành phần khi click vào
    const taskIndex = tasks.findIndex(item => item.id == id);
    tasks.splice(taskIndex,1); //xóa task có index = taskIndex, xóa số lượng . 
    showListTask();
 }

function filterTask() { }
function changeStatus() { }
function assignTag() { }

showListTask();
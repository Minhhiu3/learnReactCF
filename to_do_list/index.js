const data = [
    { id: 1, title: 'title1' },
    { id: 2, title: 'title2' },
    { id: 3, title: 'title3' },
    { id: 4, title: 'title4' },
];

let nowDataEdit = null;

//lay dl tu localstorage va gan vao bien
let todoUI = getData();

const todoInput = document.getElementById("todoInput");
const actionButton = document.getElementById("actionButton");
const errorMessage = document.getElementById("errorMessage");
const todoList = document.getElementById("todoList");

function getData() {

    //lay dl trong local s
    const dataLocal = JSON.parse(localStorage.getItem('todos') || "[]");
    return dataLocal;
}
//
function handleLocal(todo) {
    //lưu dữ liệu vào local
    return localStorage.setItem('todos', JSON.stringify(todo));
}

function resert() {
    errorMessage.style.display = "none";
    todoInput.value = "";
}

function renderUI(dataList) {
    if (!Array.isArray(dataList)) {
        errorMessage.innerHTML = "sai dinh dang dl";
        errorMes.style.display = "block";
    }
    if (dataList.length === 0) {
        todoList.innerHTML = "Ko co du lieu";
    }

    todoList.innerHTML = "";

    dataList.forEach((todo) => {
        const li = document.createElement("li");
        li.className = `todo-item`;
        li.innerHTML = `
        <span class="task-text">${todo.id} ----- ${todo.title}</span>
        <button onclick="deleteTodo('${todo.id}')" class="delete">Xoa</button>
        <button onclick="editTodo('${todo.id}')" class="edit">Sua</button>
        `
        todoList.appendChild(li);
    });
}

function addTodo() {
    todoUI = getData();
    const value = todoInput.value.trim();
    //lay dl tu input
    if (value.length === 0) {
        errorMessage.innerHTML = "chua nhap du lieu";
        resert();
    }
    const todo = {
        id: 1,
        title: value
    };
    handleLocal([...todoUI, todo]);
    renderUI(getData());
    console.log(todo);
    resert
}
actionButton.addEventListener('submit', addTodo());
renderUI(todoUI);
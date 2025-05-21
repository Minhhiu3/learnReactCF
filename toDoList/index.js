const data = [
    { id: 1, title: 'title1' },
    { id: 2, title: 'title2' },
    { id: 3, title: 'title3' },
    { id: 4, title: 'title4' },
];
let todoUI = getData();

const todoInput = document.getElementById("todoInput")
const actionButton = document.getElementById("actionButton")
const errorMes = document.getElementById("errorMessage")
const todoList = document.getElementById("todoList")
const listCharacters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
let todoEditing = null;
function generateRandomID(length) {
    let characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    let id = 'todo-';
    for (let i = 0; i < length; i++) {
        let index = Math.floor(Math.random() * characters.length)
        id += characters[index]
    }
    return id
}
//console.log(generateRandomID(5));

function renderUI(dataList) {
    if (!Array.isArray(dataList)) {
        errorMes.innerHTML = "sai dinh dang dl";
        errorMes.style.display = "block";
    }
    if (dataList.length === 0) {
        todoList.innerHTML = "khong co du lieu"
    }
    todoList.innerHTML = "";
    dataList.forEach((todo) => {
        const li = document.createElement('li');
        li.className = `todo-item`;
        li.innerHTML = `
        <span class="task-text">${todo.id}    -----    ${todo.title}</span>
<button id="" onclick="deleteTodo('${todo.id}')" class="edit">xoa</button>
<button id="" onclick="editTodo('${todo.id}')" class="delete">sua</button>
        `
        todoList.appendChild(li)
    });
}
function addTodo() {
    todoUI = getData()
    const value = todoInput.value.trim();
    //lay dl input
    if (value.length === 0) {
        errorMes.innerHTML = "ban chua nhap du lieu";
        errorMes.style.display = "block";
    }
    if (todoEditing) {
        //
        const todoElement = todoUI.find((todo) => todo.id === todoEditing.id);
        if (todoElement) {
            todoElement.title = value;
            handleLocal(todoUI);
        }
        console.log(todoEditing);
        resert()
        todoEditing = null;
        renderUI(getData());

    }
    else {

        //console.log(value);
        const todo = {
            id: generateRandomID(3),
            title: value
        };
        handleLocal([...todoUI, todo]);
        renderUI(getData());
        console.log(todo);
        resert();
    }


}
//
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
function deleteTodo(idTodo) {
    console.log(idTodo);
    todoUI = getData();

    todoUI = todoUI.filter((todo) => todo.id !== idTodo);
    console.log(todoUI)
    handleLocal([...todoUI])
    renderUI(getData())
}
function editTodo(idTodo) {
    todoInput.focus();
    todoUI = getData();
    const todoEdit = todoUI.find((todo) => todo.id === idTodo);
    console.log(todoEdit);

    if (todoEdit) {

        actionButton.innerHTML = "sua";
        todoInput.value = todoEdit.title;
        todoEditing = todoEdit;
    }



}
function resert() {
    todoInput.value = "";
    errorMes.style.display = "none";
    actionButton.innerHTML = "them"
}
function resertTodo() {
    resert()
}
actionButton.addEventListener('submit', addTodo);
// actionButton.addEventListener('')
renderUI(todoUI)

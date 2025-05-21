const formAddSv = document.getElementById("formAddSv");
const thongbao = document.getElementById("thongbao");
const table = document.getElementById("table");

function randomId(length) {
    const char = '0123456789';
    let id = '';
    for (let i = 0; i < length; i++) {
        id += char.charAt(Math.floor(Math.random() * char.length));
    }
    return id;
}

function getData() {
    return JSON.parse(localStorage.getItem('dataSv') || "[]");
}

function handleLocal(dataSv) {
    localStorage.setItem('dataSv', JSON.stringify(dataSv));
}

function renderData(dataList) {
    if (!Array.isArray(dataList)) {
        alert(`Sai định dạng dữ liệu!`);
        return;
    }
    if (dataList.length === 0) {
        thongbao.innerHTML = "Bạn chưa có dữ liệu";
        return;
    } else {
        thongbao.innerHTML = "";
    }

    table.innerHTML = "";
    dataList.forEach((sv) => {
        const tr = document.createElement('tr');
        tr.innerHTML = `
            <td>${sv.id}</td>
            <td>${sv.name}</td>
            <td><input id="sciValue${sv.id}" type="text" value="${sv.science}" onchange="updatePoint('${sv.id}', 'science', this.value)" readonly /></td>
            <td><input type="text" id="engValue${sv.id}" value="${sv.english}" onchange="updatePoint('${sv.id}', 'english', this.value)" readonly /></td>
            <td><input type="text" id="mathValue${sv.id}" value="${sv.math}" onchange="updatePoint('${sv.id}', 'math', this.value)" readonly /></td>
            <td>${sv.math + sv.english + sv.science}</td>
            <td>
                <button onclick="deleteSv('${sv.id}')">xoa</button>
                <button id="sua${sv.id}" onclick="toggleEdit('${sv.id}')">sua</button>
            </td>
        `;
        table.appendChild(tr);
    });
}

function deleteSv(id) {
    let dataSv = getData();
    dataSv = dataSv.filter(sv => sv.id !== id);
    handleLocal(dataSv);
    renderData(dataSv);
}

formAddSv.addEventListener('submit', function (event) {
    event.preventDefault();

    const id = randomId(4);
    const name = document.getElementById('name').value.trim();
    const math = parseFloat(document.getElementById('math').value);
    const english = parseFloat(document.getElementById('english').value);
    const science = parseFloat(document.getElementById('science').value);

    if (!name || isNaN(math) || isNaN(english) || isNaN(science)) {
        thongbao.innerText = " nhập đầy đủ và đúng định dạng!";
        return;
    }

    const newStudent = { id, name, math, english, science };

    let dataSv = getData();
    dataSv.push(newStudent);
    handleLocal(dataSv);
    renderData(dataSv);
    formAddSv.reset();
});

function updatePoint(id, sub, value) {
    let dataSv = getData();
    const student = dataSv.find(sv => sv.id === id);
    if (student && !isNaN(parseFloat(value))) {
        student[sub] = parseFloat(value);
        handleLocal(dataSv);
        renderData(dataSv);
    }


}

function toggleEdit(id) {
    const sciValue = document.getElementById(`sciValue${id}`);
    const engValue = document.getElementById(`engValue${id}`);
    const mathValue = document.getElementById(`mathValue${id}`);
    const suaBtn = document.getElementById(`sua${id}`);

    const isReadOnly = sciValue.readOnly;
    console.log(isReadOnly);

    sciValue.readOnly = !isReadOnly;
    engValue.readOnly = !isReadOnly;
    mathValue.readOnly = !isReadOnly;

    if (isReadOnly) {
        //if isR la check xem cai kia co phai true ko
        suaBtn.innerHTML = "luu"
    } else {
        suaBtn.innerHTML = "sua"
    }
}


// Lần đầu load trang
renderData(getData());

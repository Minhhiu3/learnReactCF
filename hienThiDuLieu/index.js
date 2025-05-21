const students = [
    { id: 1, name: "Nguyễn Văn A", age: 20, city: "Hà Nội" },
    { id: 2, name: "Trần Thị B", age: 19, city: "TP.HCM" },
    { id: 3, name: "Lê Văn C", age: 21, city: "Đà Nẵng" },
];

function rentData(arr) {
    const dataTable = document.getElementById('dataTable');
    for (let i = 0; i < arr.length; i++) {
        const data = document.createElement('tr');
        data.innerHTML = `
        
            <tr>
                <td>${arr[i].id}</td>
                <td>${arr[i].name}</td>
                <td>${arr[i].age}</td>
                <td>${arr[i].city}</td>
            </tr>
        `;
        dataTable.appendChild(data);

    }



}
rentData(students)
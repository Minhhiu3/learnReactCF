// Input Thực hiện viết hàm sortedUsers để sắp xếp người dùng theo tên chính
const users = [
    { fullname: "Hoang Thi K", age: 20, address: "LangSon" },
    { fullname: "Le Thi X", age: 22, address: "BacGiang" },
    { fullname: "Le Van Y", age: 21, address: "HaNoi" },
    { fullname: "Hoang Duc F", age: 22, address: "HaNoi" },
    { fullname: "Tran Duc B", age: 32, address: "LangSon" },
    { fullname: "Tran Duc B", age: 32, address: "LangSon" },
    { fullname: "Tran Thi E", age: 32, address: "LangSon" },
    { fullname: "Nguyen Ngoc V", age: 32, address: "LangSon" },
    { fullname: "Nguyen Minh E", age: 32, address: "LangSon" },
    { fullname: "Nguyen Duc H", age: 32, address: "LangSon" },
];

// function compareUser(user1, user2) {
//     if (JSON.stringify(user1) === JSON.stringify(user2)) return true
//     return false
// }

function compareUser(arr) {
    // let newArr = arr.filter((item, index) => arr.indexOf(item === index));
    const newArr = arr.reduce((acc, cur) => {
        const isDupicate = acc.some((item) =>
            item.fullname === cur.fullname
            &&
            item.age === cur.age
            &&
            item.address === cur.address

        );
        // acc.push(isDupicate);
        if (!isDupicate) {
            acc.push(cur);
        }
        return acc;
    }, [])
    return newArr
}
function sortedUsers(arr) {
    const compareArr = compareUser(arr);
    const lastName = compareArr.map(compareArr => {
        const parts = compareArr.fullname.split(" ");
        return parts[parts.length - 1]
    });
    const finalArr = compareArr.sort((a, b) => {
        const aLast = a.fullname.split(" ").pop();
        const bLast = b.fullname.split(" ").pop();
        return bLast.localeCompare(aLast);
    });
    return finalArr;
}
console.log(sortedUsers(users));



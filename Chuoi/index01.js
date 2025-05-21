

//bien doi chuoi
let hlw = "hello world";
console.log(hlw.toUpperCase()); // HELLO WORLD
console.log(hlw.toLowerCase()); // hello world
console.log(hlw.trim()); // xoa khoang trang 2 dau
console.log(hlw.trimStart()); // xoa khoang trang ben trai
console.log(hlw.trimEnd()); // xoa khoang trang ben phai

//cat chuoi
//slice(start, end) // cat tu start den end - 1
//slice: ho tro chi so am, tao ra chuoi con duoc cat tu chuoi goc,neu khong cat duoc thi tra ve chuoi rong
console.log(hlw.slice(0, 4)); // hello
console.log(hlw.split(" ")); // ["hello", "world"]//cat chuoi thanh 1 mang theo ki tu phan tach
//substring(start, end) // cat tu start den end - 1, khong ho tro chi so am
console.log(hlw.substring(0, 5)); // hello
console.log(hlw.substring(5, 0)); // hello
//substr(start, length) // cat tu start den length
//substr: khong ho tro chi so am, cat tu start den length
console.log(hlw.substr(0, "5")); // hello
console.log(hlw.split());//tra ve 1 mang chua chuoi

let content = `le minh hieu tao  al le minh hieu h`;
function checkWordInContent(stringContent){
    let arrContent = stringContent.split(" ");
    stringContent.length;
    console.log(arrContent.length); // 8

}
//checkWordInContent(content);
let myStr = "hoc lap trinh voi thay Hoang, thay Hoang day js kha on";
function updateString(str){
    str.replaceAll("thay Hoang", "thay Dong"); // thay Hoang -> thay Hieu
    str.replace("js", "javascript"); // js -> javascript
    return str;
}
console.log(updateString(myStr)); // hoc lap trinh voi thay Dong, thay Dong day javascript kha on

const arr = [
	{ id: 1, fullname: "Nguyen Anh Huy", age: 32 },
	{ id: 2, fullname: "Nguyen Huy Hoang", age: 10 },
	{ id: 3, fullname: "Hoang Thanh Huy", age: 30 },
	{ id: 4, fullname: "Lê Đạt", age: 30 },
	{ id: 5, fullname: "Lê Duy Đạt", age: 30 },
	{ id: 6, fullname: "Huy Quốc", age: 30 },
    { id: 7, fullname: "Nguyễn Quốc Auy", age: 30 },
];
function searchName(arr, name) {
    const resutl = arr.filter((item) => {
        let arrOfName = item.name.split(" ");
        firstName = arrOfName[arrOfName.length - 1]; // lay ra ky tu cuoi cung
        console.log(firstName); // H
        return firstName === name; // so sanh voi name

    });
    return resutl;
}
//console.log(searchName(arr, "Huy"));

function sortName(arr, name){
    const result = arr.filter((item) => {
        let arrOfName = item.fullname.split(" ");//chia chuoi thanh mang
        firstName = arrOfName[arrOfName.length - 1]; // lay ra ky tu cuoi cung
        item.arrOfName.sort(name); // sap xep mang
    });
    
    
    return result;
}
console.log(sortName(arr, "Huy"));
arr.splice(2,1)

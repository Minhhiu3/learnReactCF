//DOM : document Object model (model: mô hình hóa tài liệu dạng đối tượng)
//file html gọi là tài liệu html
//thẻ html là gốc của html và là 1 thuộc tính của object
//document là 1 object, js dùng document để tương tác với html

//thao tác với element node(các thẻ html)
//thao tác với attribute node
//thao tác với text node

//thao tác với html
// getElementById()        / element or null
// getElementByTagName()   / htmlCollection
// getElementByName()      / 
// getElementByClassName() / htmlCollection
// querySelector()         / phần tử html đầu tiên thỏa mãn selector
// querySelectorAll()      / nodeList
// nodelist không phải là 1 mảng nhưng có thể truy cập gần như 1 mảng 
// console.log(document.getElementById('a'));
// console.log(document.getElementsByTagName('ol'));
// console.log(document.getElementsByClassName('A'));
// console.log(document.querySelector('ol.li'));
// console.log(document.querySelectorAll('ol.li'));

// const eelement = document.getElementById('languae');
// console.log(eelement.children);


function printToWindow(a) {
    // a = "";
    const h1Element = document.createElement("h1");
    h1Element.innerText = a;
    document.body.appendChild(h1Element);
}
function printToWindoww(a) {
    // a = "";
    const h1Element = document.createElement("h1");
    h1Element.innerText = a;
    h1Element.style.color = "red";
    document.body.appendChild(h1Element);

}
// setInterval(() => {
//     printToWindow("hieu1")
// }, 1000)

// const h2Element = document.getElementsByTagName("h2")[0];
// console.log(h2Element);
// h2Element.style.color = "red";
const product = [
    { id: 1, name: "hieu1", price: 100 },
    { id: 2, name: "hieu2", price: 300 },
    { id: 3, name: "hieu3", price: 200 },
    { id: 3, name: "hieu3", price: 300 }
];
function printWithPrice(arr) {
    // const a = arr[0].price;
    // const b = arr[1].price;
    const max = arr.sort((a, b) => b.price - a.price);
    //printToWindow(`Ten sp: ${max[0].name} | Gia sp: ${max[0].price}`);
    if (max[0] = max[1]) {
        printToWindoww(`Ten sp: ${max[0].name} | Gia sp: ${max[0].price}`);
    }
}
printWithPrice(product);




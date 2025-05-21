const products = [
    { id: 1, name: "Laptop", price: 1000 },
    { id: 2, name: "Mouse", price: 50 },
    { id: 3, name: "Keyboard", price: 150 },
    { id: 4, name: "Monitor", price: 300 },
    { id: 5, name: "USB Cable", price: 25 },
    { id: 6, name: "Webcam", price: 120 },
    { id: 7, name: "Desk Lamp", price: 80 },
    { id: 8, name: "Headphones", price: 200 },
    { id: 9, name: "Speaker", price: 180 },
    { id: 10, name: "Chair", price: 250 },
  ];
  //Thực hiện viết hàm filteredProductNames để lọc ra các sản phẩm co giá lớn hơn giá nhập vào và trả về các sản phẩm đó.
function filteredProductNames(arr,price){
    return arr.filter(product => product.price >= price).map(product => product.name);
}
console.log(products);
console.log(filteredProductNames(products, 200)); 
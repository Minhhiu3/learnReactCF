var myIn4 ={
    name : "hieu",
    age : 25,
    address : "123 street"
}
// console.log(Object.values(myIn4));
// console.log(Object.keys(myIn4));
// console.log(Object.entries(myIn4));
// console.log(Object.entries(myIn4));


//     const products = [
//         {id:1,name:"Product 1", price:1000},
//         {id:2,name:"Product 2", price:2000}
//     ]
//     class cart {
//     constructor(idUser, products) {
//         this.idUser = idUser;
//         this.product = products;
//         this.calc = function () {
//             let total = 0;
//             for (let i = 0; i < this.product.length; i++) {
//                 total += this.product[i].price;
//             }
//             return total;
//         };

//     }
// }
// const cardHieu = new Cart("123",products);
// console.log(`Total: ${cardHieu.calc()}`);

// function book(title, author, year){
//     this.title = title;
//     this.author = author;
//     this.year = year;
// }
// book.showBook = function book() {
//     console.log(`Book: ${book.title}`);
// }
// const obj2

let arr1 = Array.from({ length: 10000 }, (_, i) => i + 1);
console.log(arr1); // 10000




// const book = [-1,-4,-7,4,412,412,412,412,41,4,124,124,14,14,1,241,24,1,63,56,453,2]
//     const arr1 = [1, 4, 3, 2, 6, 5, 7];
    function quickSort(arr1){
        if(arr1.length <= 1) return arr1;
        const pivot = arr1[0];
        const left = [];
        const right = [];
        for(let i = 1; i < arr1.length; i++){
            if(arr1[i] < pivot) left.push(arr1[i]);
            else right.push(arr1[i]);
        }
        return [...quickSort(left), pivot,...quickSort(right)];
    }
    console.time("countTime");
    console.log(quickSort(arr1));;
    console.timeEnd("countTime");

    // function bubleSort(book){
    //     for(let i = 0; i < book.length - 1; i++){
    //         for(let j = 0; j < book.length - 1 - i; j++){
    //             if(book[j] > book[j + 1]){
    //                 const temp = book[j];
    //                 book[j] = book[j + 1];
    //                 book[j + 1] = temp;
    //             }
    //         }
    //     }
    //     return book;
    // }
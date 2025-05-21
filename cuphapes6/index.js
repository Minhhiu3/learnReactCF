const in4 = { name: "hieu", age: 21 };
const adress = { name: "hn", distric: "soc son" };
const phoneNumber = [1, 2, , , 3];
const in5 = {
    ...in4,
    ...adress,
    ...phoneNumber,
    job: "developer",
    skills: ["js"],
    email: "admin@",
    password: "password",

};
const {password: matkhau,...other} = in5


//console.log(matkhau);
//other lấy được do áp dụng rest gom phần còn lại thành object/arrayarray
//console.log(other);
function sum(...rest) {
    //console.log(rest);
    let total = 0;
    for (let i = 0; i < rest.length; i++) {
        total += rest[i];
    }
    return total;

}

//console.log(sum(1, 2, 3, 4, 5,"a"));

const people = [
    {name: "John", scale: 60},
    {name: "Alice", scale: 80},
    {name: "Bob", scale: 70},
    {name: "Charlie", scale: 90},
    {name: "David", scale: 50},
    {name: "Eve", scale: 75},
    {name: "Frank", scale: 85},
    {name: "Grace", scale: 65},
    {name: "Henry", scale: 78},
    {name: "Isabella", scale: 82},
    {name: "Jack", scale: 73},
    {name: "Karen", scale: 68},
    {name: "Lisa", scale: 87},
    {name: "Michael", scale: 76},
    {name: "Nancy", scale: 69},
    {name: "Olivia", scale: 84},
    {name: "Peter", scale: 71},
]
function elevatorScale(...people){
    let max = 750;
    let total = 0;
    for(let i = 0 ; i < people.length ; i++){
        total += people[i].scale;
        // if(total > max){
        //      console.log(`khong the chay vi qua ${max}`);
        //     return false;
        // }
    }
    console.log(total);
    return total <= max;

}

//elevatorScale(...people);
const obj1 = {
    name: "hieu",
    age : 30,
    city : 'New York',
    country : 'USA',
    sayHello: function(){
        console.log(`Hello, my name is ${this.name}`);
    }

}
//const obj2 = structuredClone(obj1);
//console.log(obj2);

// flat
const arr1 = [1,2,3,/*0*/ 
                [4,5,6,/*1*/
                    [7,8,/*2*/
                        [9,10],/*3*/
                        [11,12]
                    ]
                ]
            ] 
const arr2 = arr1.flat(0);
const arr3 = arr1.flat(1);
const arr4 = arr1.flat(2);
const arr5 = arr1.flat(3);
const arr6 = arr1.flat(Infinity);
// console.log(arr1);

// console.log(arr2);

// console.log(arr3);

// console.log(arr4);

// console.log(arr5);

// console.log(arr6);

const myArr1 = [
                 [1, 2],
                 [3, 4],
                 [5, 6],
                 [7, 8,
                    [-1,-4,-6]
                ],
                ];

                
function maxValueInArray(myArr1) {
    const myArr2 = myArr1.flat(Infinity);
    let max = myArr2[0];
    for(let i = 1 ; i < myArr2.length ; i++){
        if(myArr2[i] > max){
            max = myArr2[i];
        }
    }
    console.log(max);

}
const myArr3 = [
    [1, 2],
    [3, 4],
    [5, 6],
    [7, 8,
       [-1,-4,-6]
   ],
   [9, 10],
   [11, 12],
   [13, 14],
   [15, 16],
   [17, 18],
   [19,,,null,, 20],
   [21, 22],
   [23, 24],
   [25, 26],
   [27, 28,,,,
   ],
   ];
//maxValueInArray(myArr3);

function flat(arr, depth =1){
    const newArr = [];
    for(let i = 0; i<arr.length; i++){
        if(Array.isArray(arr[i]) && depth > 0 ){
            newArr.push(...flat(arr[i], depth - 1));
        }else {
            newArr.push(arr[i]);
        }
        // return newArr;
    }
    return newArr.filter(Boolean);

}
// console.log(flat(myArr3, 2));
function printNumber(n){
    
    if(n < 1) return;
    printNumber(n-1);
    console.log(n);
}
//printNumber(5);
///////////////////////////////////////////////////////////////////////////////////
// <li>${index}: ${item}</li>
const animal = ["dog", "cat", "fish", "bird", "lizard", "human"];
const aaa = ["dog", "cat", "fish", "bird", "lizard", "humann"];
// const result =  animal.forEach(
//     (item, index , aaa ) => {
//         console.log(item);

//         console.log(index);

//         console.log(aaa);

//         return "hi";
//     }
// );
function printAnimal(animal) {
    let content = `
    <table border="1">
        <thead>
            <tr>
                <th>ID</th>
                <th>Name</th>
            </tr>
        </thead>
        <tbody>
    `;

    animal.forEach((item, index) => {
        content += `
            <tr>
                <td>${index}</td>
                <td>${item}</td>
            </tr>
        `;
    });

    content += `</tbody></table>`; // Kết thúc bảng

    document.body.innerHTML = content; // Hiển thị bảng lên trang web
}

// Dữ liệu mẫu

printAnimal(aaa);
//find
function findAnimal(arr) {
   const result =  arr.findIndex((item, index) => {
        
        if(item == "fish") return index;
    })
console.log (result);
    
    }

    const content = [
        { id: 1, name: "John" },
        { id: 2, name: "Jane" },
        { id: 3, name: "Bob" },
        { id: 4, name: "Alice" },
        { id: 5, name: "Charlie" },
    ];
function findIndexx(arr){
return arr.isArray(arr) && arr.findIndex((item)=> item.name == "Bob");
 
}

function findLastIndex(arr){
    
}
//findIndexx(content);
    //findAnimal(animal);
//filterr luôn trả về mảng rỗng hoặc đáp ứng điều kiện ----------------------------------------------------------------------------
const bbb = [1,2,3,4,5,6,7,8,9,10];

function filterNumber(arr){
    return arr.filter((item) => item % 2 === 0);
}
//console.log(filterNumber(bbb));

const student = [
    { name: "john", age: 18 },
    { name: "alice", age: 20 },
    { name: "aob", age: 17 },
    { name: "bob", age: 17 },
    { name: "charlie", age: 19 },
    { name: "david", age: 21 },
    { name: "eve", age: 16 },
    { name: "frank", age: 22 },
    { name: "grace", age: 23 },
];
function filterStudentAge(arr){
    return arr.filter((item) => item.age <= 18);

}
//console.log(filterStudentAge(student));
////map trả về mảng mới với các giá trị đã được biến đổi từ mảng ban đầu--
function addRoleStudent(arr){
    return arr.map((item) => {
        return {
            ...item,
            role: "student",
        };
    });
}
//console.log(addRoleStudent(student));
//console.log(student);
const product = [
    { name: "Product 1", price: 100 , quantity: 2},
    { name: "Product 2", price: 200 , quantity: 3},
    { name: "Product 3", price: 300  , quantity: 4},
    { name: "Product 4", price: 400  , quantity: 5},
    { name: "Product 5", price: 500  , quantity: 6},
];
function totalPrice(arr){
     arr.map((item) => {
        last = item.price * item.quantity;
        console.log(last);
    })
    return last;
    
}
//console.log(totalPrice(product));
//some-every--------------------------------------------------------
const students = [
    { name: "hieu", sex : "male" },
    { name: "minh", sex : "male" },
    { name: "an", sex : "male" },
    { name: "tuan", sex : "male" },
    { name: "long", sex : "malee" },
]
function testSome(arr){
    return arr.some((item) => item.sex === "female");

}
function testEvery(arr){
    return arr.every((item) => item.sex === "male");

}
//console.log(testEvery(students));
//console.log(testSome(students));
///sort--------------------------------------------------------------------------------------------------------
/*
* input: không nhập hoặc nhập 1 compareFunction
* thay đổi mảng ban đầu và nếu không muốn thay đổi mảng ban đầu thì dùng toSorted()
* chỉ thực hiện so sánh chuỗi, nếu so sánh số thì cần truyền vào 1 hàm so sánh 
(
arr.sort((a, b) => a - b); // Tăng dần
arr.sort((a, b) => b - a); // Giảm dần
)
* compareFunction: âm thì a đứng trước b, dương thì b đứng trước a, ===0 thì không thay đổi vị trí của a và b
* nếu không có compareFunction thì mặc định là sắp xếp theo thứ tự tăng dần của chuỗi
* 
*/
const arr7 = [
    {id: 1, name: "product1", price: 100},
    {id: 2, name: "product2", price: 600},
    {id: 3, name: "product3", price: 500},
    {id: 4, name: "product4", price: 200},
    {id: 5, name: "product5", price: 300},
    {id: 6, name: "product6", price: 50},
];

//sắp xếp tăng và giảm dần theo giá(a-b là tăng dần b-a là giảm dần)
function sortArr(arr){
    arr.sort((a, b) => a.price - b.price);
    return arr;
}
function sortArrr(arr){
    arr.sort((a,b) => b.price - a.price)
    return arr;
}
//console.log(arr7);
//console.log(sortArr(arr7));
//console.log(sortArrr(arr7));

//hàm nhận vào mảng user và trả về danh sách theo tên a-z
function sortUser(arr){
    const arrCopy = structuredClone(arr);
    arrCopy.sort((a, b) => {
        if (a.name < b.name) {
            return -1; // a đứng trước b
        }
    });
    return arrCopy;
}
//console.log(sortUser(student));

//sắp xếp mảng thưa với các chuỗi từ bé tới lớn và xếp trước, 
//sau đó đến chuỗi xếp theo a-z, falsy để cuối mảng và bỏ qua empty.
const arrSparse = [1, 20,12,15,52,45, 3, "a", "b", "c", , , , 4, 5, 6, null, undefined, false, true, "", 0,1,,-1];
function sortSparse(arr){
    const arrClone = arr.flat(1);
    const falsyArr = [];
    const stringArr = [];
    const numberArr = [];
    arrClone.forEach(Element => {
        if(!Element) falsyArr.push(Element);
        else if (typeof Element === "number") numberArr.push(Element);
        else if (typeof Element === "string") stringArr.push(Element);
        //else if (typeof Element === 0) number.push(Element);

    })
    result = numberArr.sort((a,b)=> {
        if(a < b) return -1;
        else if (a > b) return 1;
        else return 0;
    }).concat(stringArr).concat(falsyArr);
    return result;
}
//console.log(sortSparse(arrSparse));

//--------------------reduce--------------------------------------------------
//reduce là hàm duy nhất có thể trả về bất kỳ kiểu dữ liệu nào, không chỉ là mảng
//reduce là hàm duy nhất có thể thay đổi giá trị của mảng ban đầu
//reduce là hàm duy nhất có thể trả về giá trị cuối cùng của mảng
//---
//reduce((accumulator, currentValue, index, array) => { }, initialValue)
//accumulator: giá trị trước đó
//currentValue: giá trị hiện tại 
//index: vị trí của giá trị hiện tại
//array: mảng ban đầu
//initialValue: giá trị khởi tạo, nếu không có thì giá trị đầu tiên của mảng sẽ là giá trị khởi tạo
//trong trường hợp mảng rỗng thì sẽ trả về undefined

const testReduce = [1,2,3,4];
function reduceTest(arr){
    const result = arr.reduce((a,b) => a+b);
        // console.log(a); // giá trị trước đó
        // console.log(b); // giá trị hiện tại
        // console.log(c); // index của giá trị hiện tại
        // console.log(d); // mảng ban đầu
        // console.log(a+b); // trả về giá trị cuối cùng
   
    return result;
}
//console.log(reduceTest(testReduce));

//tính giai thừa ch input là số
function factorial(n){
    for(let i=n; i>0;i++){
        n *= i-1;
    }
}
//console.log(factorial(5)); // 120

//tính tich các phần tử trong mảng
function multipicationArr(arr){
    return arr.reduce((a,b)=> a*b);
    //arr.reduce((acc,cur,index,arr)=>{
        //     return acc * cur;})

}
console.log(multipicationArr([1,2,3,4,5])); 
//tính tích các phần tử trong mảng 


const animalReduce = ["dog", "cat", "fish", "bird", "lizard", "human", "dog", "cat", "fish", "bird", "lizard", "humann"];
//  function countAnimal(arr){
//     const result = arr.reduce((acc,cur,index,arr) => {
//         if(!acc[cur]){
//             acc[cur] =1;
//         } 
//         else {
//             acc[cur]++;
//         }
//         console.log(`${cur}: ${acc[cur]}`);
//         return acc;
//     });
//     return result;
//  }

//loaị bỏ các phần tử trùng lặp trong mảng và trả về mảng mới
 function clearDuplicate(arr){
    return arr.reduce((acc,cur,index,arr) => {
        if(!acc.includes(cur)){
            acc.push(cur);
        } 
        return acc;
    },[]);
 } 

//đếm số lần xuất hiện
function countAnimal(arr){
    const result = arr.reduce((acc,cur,index,arr) => {
        if(acc[cur]){
            acc[cur] ++;
        } 
        else {
            acc[cur]=1;
        }
        return acc;
    },[]);
    return result;
    
 }
 console.log(clearDuplicate(countAnimal(animalReduce)));
console.log(countAnimal(animalReduce));

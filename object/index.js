const myInfo = {
   name : "hieu",
   age : 25,
   address : "123 street"
}

function printKeyInObject(){
    for(var key in myInfo){
        console.log(`${key} + ${myInfo[key]}`);
    }
} 

    printKeyInObject();

//class object
class oto {
    constructor(name, price) {
        this.name = name;
        this.price = price;

    }
}
var myCar = new oto("Toyota", 20000000);
//object literal 
const obj1 = {};

//factory function 
function motor(name, price){
    return {
        name,
        price
    }
}
var m = motor(
 "Honda",30000000
);


//new object
var obj2 = {
    name: "hieu",
    age: 25,
    address: "123 street"
};




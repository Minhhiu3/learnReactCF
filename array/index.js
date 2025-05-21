
// console.log(arr);
// console.log(arr.pop()); // Output: ["a", "b"]
// console.log(arr);

// console.log(arr.push(6,7,8,));

// console.log(arr); // Output: ["a", "b", 6, 7, 8]

// console.log(arr.unshift(1));

// console.log(arr); // Output: [1, "a", "b", 6, 7, 8]

// if(Boolean(arr[i])){
//     //     arr2.push(arr[i]);
//     // }

function locSo() {
    const arr = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10",];
    console.log(arr); // Output:
    const even = [];
    const odd = [];
    for (var i = 0; i < arr.length; i++) {
        if(arr[i] %2 === 0){
            even.push(arr[i]);
        }else odd.push(arr[i]);

    }
    console.log("So chan: ", even);
    console.log("So le: ", odd);
    
}
//locSo();

function clearFalsy(){
    const arr = ["a", "b", "c", "", null, "undefined", "dong","huy", NaN,10,0,true,false,];
    const falsy = [];
    const truthy = [];
    console.log(arr); // Output: ["a", "b", "c", "dong", "huy", 10, 6, true, false]
    for (var i = 0; i < arr.length; i++) {
        if(!arr[i]) {
            falsy.push(arr[i]);
        }else truthy.push(arr[i]);
    }
    console.log("cac gt false trong mang ", falsy); 
    console.log("cac gt true trong mang ", truthy); 
    console.log("Mang sau khi loc ", arr);


}
//clearFalsy();
function shortedAndLongestElement(){
    const arr = ["a", "bb", "cc", "dd", "ee", "ff", "gg", "hh", "ii", "jjj"];
    const shorted = [];
    const longest = [];
    for (let i = 0 ; i < arr.length ; i++) {
        if(longest.length < arr.length){
            longest.push(arr[i]);
        }

        //console.log("phan tu ngan nhat la", shorted);
        console.log("phan tu dai nhat la", longest);
    }
}

//shortedAndLongestElement();
function reverseArray(){
    const arr = ["a", "b",,,,, "c", "d", "e"];
    const reverse = [];
    for (let i = arr.length - 1 ; i >= 0 ; i--) {
        if (!arr[i]) {
            reverse.unshift(arr[i]);
            
        }else reverse.push(arr[i]);
    }
    
    console.log(reverse);
}
//reverseArray()
const arr1 = [1, 2, 3, 4]
let a=(1,2,3,4);
a toArr





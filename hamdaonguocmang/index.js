
const arr = [1,3,5,2,4,,,,6,7,2,5,null,true,false,undefined,0,1,2,3,4,5,6,7,8,9,10];

function reverseArr(arr){
    let arrr = arr.filter(Boolean);
    let newArr = [];
    
    for (let i = arrr.length - 1; i >= 0; i--) {
        arrr.filter((item, index)=> arr.indexOf(item) === index);
        newArr.push(arrr[i]);
    }
    return newArr;
}
console.log(reverseArr(arr));
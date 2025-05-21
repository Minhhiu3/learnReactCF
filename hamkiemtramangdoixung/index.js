const arr = [ 'a', 'b', 'c', 'b', 'a'];
function checkSymmetricalArr(arr){
    if(arr.length < 2) return console.log("mang phai lon hon 1 phan tu");
    let isSymmetrical = true;
    for(let i = 0; i < arr.length / 2; i++){
        if(arr[i] !== arr[arr.length - 1 - i]){
            isSymmetrical = false;
            break;
        }
    }
    return isSymmetrical;
}

console.log(checkSymmetricalArr(arr)); // true
console.log(checkSymmetricalArr([1, 2, 3, 4, 5])); // false
console.log(checkSymmetricalArr([2])); // false
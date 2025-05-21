//xap xep lai mang 
//lay phan tu thu 1
const a = [3, 5, 9, 2, 6];
function findSecondLargestNumber(arr) {
    const d = [];
    const arrr = arr.sort();
    const arrrr = arrr.reverse()
    d.push(arrrr.length - 1);
    return d;
}

console.log(findSecondLargestNumber(a));
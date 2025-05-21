const arr = ["cat","cat","dog",1,1,3,4,5,6,NaN,NaN,undefined,undefined,null,null];
function removeDuplicate(arr){
    let newArr = arr.filter((item, index/**index la vi tri xuat hien cua phan tutu */) => arr.indexOf(item) === index);
    return newArr;
}
console.log(removeDuplicate(arr));
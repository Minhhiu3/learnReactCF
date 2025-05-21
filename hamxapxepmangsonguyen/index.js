const arr = [1,3,5,2,4,,,,6,7,2,5,null,true,false,undefined,0,1,2,3,4,5,6,7,8,9,10];
function sortArrNumber(arr){
    let arrr = arr.filter(Boolean);
    for (let i = 0; i < arrr.length; i++) {
        for (let j = i + 1; j < arrr.length; j++) {
            if (arrr[i] > arrr[j]) {
                let temp = arrr[i];
                arrr[i] = arrr[j];
                arrr[j] = temp;
            }
        }

    } 
    return arrr;
}
console.log(sortArrNumber(arr));


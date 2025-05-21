const arr = [1,1,2,2,3,3,4,4,4,4,"dog","dog","cat"];
function countElement(arr){
   
    let count = 0; // bien dem so lan xuat hien
    let result = {}; // mang ket qua
    for(let i = 0; i < arr.length; i++){
        for(let j = 0; j < arr.length; j++){
            if(arr[j] === arr[i]){
                count++;
            }
        }
        result[arr[i]] = count;
        count = 0;
    }
    return result;
}
console.log(countElement(arr)); 

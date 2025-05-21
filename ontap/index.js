const a = { a: 1, b: 2, c: 1, d: 2 };
function countProperties(obj) {
    let count = 0;
    for (let key in obj) {
        if (obj[key]) {
            count++;
        }
    }
    return count;
}
//console.log(countProperties(a));

const str = "aaabbbcccddeeefffgggghhhhhh";
function encodeRLE(str) {
    let count = 0;
    let result = "";
   
    for (let index = 0; index < str.length; index++) {
        if(str[index] === str[index+1]){
            count++;
        }else{
            result += count + str[index];
            count = 1;
        }
        
    }
    
    return result;
}
//xmine
//console.log(encodeRLE(str));
const strNumber = [1, 2, 2, 3, 3, 3, 4, 4, 4];
 function findMostFrequent(arr){
    return arr.reduce((acc,currentValue)=>{
        

    })
 }
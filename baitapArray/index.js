const falsyarray = [1,2,3,,,null,,4,5,5,6,7,,88,,55,,,,5,5];

//loc falsy
function cleanFalsy(arr){

    const result = arr.filter(Boolean);
    return result;
}
console.log ("loc falsy")
console.log (falsyarray)
console.log(cleanFalsy(falsyarray));
console.log("");

//tim so chan
const arrayNumber = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];
function filterEvenNumbers(arr){
    const result = arr.filter((item) => item % 2 === 0);
    return result;
}
console.log ("tim so chan")
console.log (arrayNumber)
console.log(filterEvenNumbers(arrayNumber));
console.log("");

//loc cac chuoi co do dai > 5
const stringArray = ["hello", "world", "javascript", "is", "awesome", "programming"];
function filterLongStrings(arr){
    const result = arr.filter((item) => item.length > 5);
    return result;
}
console.log ("loc chuoi co do dai > 5")
console.log (stringArray)
console.log(filterLongStrings(stringArray));
 console.log("");

//tim so nguyen to
const primeArray = [1,1,2,5,3,7,4,2,9,9,5,6,7,8,9,10,11,12,13,14,15];
function  findMinMaxAverage(arr){
    let min = arr[0];
    let max = arr[0];
    let indexMax = [0];
    let indexMin = [0];
    let avg = 0;

    for(let i = 1; i < arr.length; i++){
        if(arr[i] < min) 
            {min = arr[i]
                indexMin = [i]
            };
        if(arr[i] > max) 
            {max = arr[i]
                indexMax = [i]

            };
        avg += arr[i];
    }
    avg /= arr.length;
    return {min,indexMin, max,indexMax, avg};
}

console.log ("tim so nguyen to")
console.log (primeArray);
console.log(findMinMaxAverage(primeArray));

console.log("");

//chen so vao mang va sap xep tang dan
const arrayToInsert = [1,11,2,5,7,9,2,4,3,4,5,7,8,9,10];
function insertAndSort(arr, num){
    arr.push(num);
    arr.sort((a,b) => a - b);
    return arr;
}
console.log ("chen so vao mang va sap xep tang dan")
console.log (arrayToInsert);
console.log(insertAndSort(arrayToInsert, 50));
console.log("");





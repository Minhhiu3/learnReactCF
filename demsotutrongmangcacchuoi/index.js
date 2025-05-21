const arrayWords = ["Hello world", "JS is fun", "Arrays and strings"];
const arrayWords2 = ["Hello world hieu hieu hieu", "JS is fun", "Arrays and s strings", "Hello world", "JS is fun", "Arrays and strings"];

function countTotalWords(arr){
  let a =0 ;
  for (i =0; i< arr.length; i++){
  let tempVar = arr[i].split(" ");
  console.log(tempVar)
  a += tempVar.length;

  }
  return a;
  //split là phương thức của string(chuỗi)
  //giúp chia 1 chuỗi lớn "a b c d e" thành các chuỗi nhỏ "a", "b", "c", "d", "e" theo kí tự phân tách split(" ")
  //sau đó trả về 1 mảng mới chứa các phần của chỗi đã bị phân tách .
  //có thể giới hạn số lượng phần tử được trả về trong mảng kết quả split(" ", number);

}
//console.log (arrayWords.length);
//console.log(countTotalWords(arrayWords))
const a = "a b c d";
const b = [];
b.push(a);
console.log(b);
const c = a.split(" ", 2);
console.log(c);
console.log(c.length);


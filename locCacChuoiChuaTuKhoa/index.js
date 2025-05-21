const arrayStrings = ["JavaScript", "java", "Python", "Ruby"];

function filterByKeyword(arr, key) {
  const a = key.toLowerCase();
  const arrLowerCase = arr.map((item) => item.toLowerCase());
  const result = arrLowerCase.filter((arrayString) => arrayString.includes(a));
  console.log(result);
}
//filterByKeyword(arrayStrings,"Ja");

// console.log(arrayStrings.includes("Java"));
//console.log(arrayStrings.filter((str) => str.includes("P",2 )))// loc cac phan tu it hon 4 ki tu

//filter là 1 phương thức của array tạo ra 1 bản sao của mảng gốc
//chứa các phần tử của mảng gốc đã vượt qua điều kiện của hàm kiểm tra 
//filter không thay đổi mảng gốc mà trả về mảng mới chứa các phần tử của mảng gốc đã thỏa điều kiện 
// arr.filter((phần tử trong mảng) => điều kiện lặp )

//include là 1 phương thức của array & string dùng để kiểm tra xem mảng hoặc chuỗi có chứa giá trị đã chuyênf vào hay không
//duyệt qua từng phần tử của mảng và trả về true/false 
// arr.includes("giá trị cần tìm", vị trí)

const num = ["cho", "meo", "ga"];
const doub = num.map((item, index, array) => {
  console.log(item);
  console.log(index);
  console.log(array);
  return item += "a"
});
console.log(doub);
console.log(num);
// map là phương thức của mảng (Array)
// Dùng để duyệt qua từng phần tử của mảng
// và tạo ra một mảng mới có cùng độ dài,
// với các phần tử đã được biến đổi theo hàm callback.
//arr.map((phần tử trong mảng, vị trí của phần tử trong mảng, mảng gốc) => phần tử trong mảng |and| điều kiện)

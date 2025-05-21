
function swapnumber(){
  //a 5 , b 10
  let a = parseFloat(prompt("Nhập a: "));
let b = parseFloat(prompt("Nhập b: "));
    a = a + b;//15
    b = a - b;//5
    a = a - b;//10
    alert(`${a}, ${b}`);
}
swapnumber();
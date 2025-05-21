function number(){
    let a = parseFloat(prompt("Nhập a: "));
    let b = parseFloat(prompt("Nhập b: "));
    let c = parseFloat(prompt("Nhập c: "));
   
if(a > b) [a,b] = [b,a];
if(b > c) [b,c] = [c,b];
if(a > b) [a,b] = [b,a];
alert(`${a} ${b} ${c}`);
}
number(); // 5 10 15
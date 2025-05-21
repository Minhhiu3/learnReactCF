// function taxSalary(){
//     let salary = parseFloat(prompt("Nhập lương cần tính thuế: "));
//     if(salary <= 11000000){
//         alert("nghèo nên o bị thuế ");
//     }
//     else if(salary <= 25000000){
//         alert("Thuế 5% của " + salary + " là: " + salary * 0.05);
//     }
//     else if(salary <= 50000000){
//         alert("Thuế 10% của " + salary + " là: " + salary * 0.10);
//     }
//     else if(salary <= 80000000){
//         alert("Thuế 20% của " + salary + " là: " + salary * 0.20);
//     }
//     else {
//     alert("Thuế 30% của " + salary + " là: " + salary * 0.30);
//     }

   
// }
// taxSalary()
function tinhThue() {
    let thuNhap = parseFloat(prompt("Nhập lương cần tính thuế: "));
    
    if (isNaN(thuNhap) || thuNhap < 0) {
        return "Thu nhập không hợp lệ";
    }

    let thue = 0;

   
    if (thuNhap > 11_000_000) {

        if (thuNhap <= 25_000_000) {
            thue += (thuNhap - 11_000_000) * 0.05;
        } 
   
        else if (thuNhap <= 50_000_000) {
            thue += (25_000_000 - 11_000_000) * 0.05 + (thuNhap - 25_000_000) * 0.10;
        } 
    
        else if (thuNhap <= 80_000_000) {
            thue += (25_000_000 - 11_000_000) * 0.05 + (50_000_000 - 25_000_000) * 0.10 + (thuNhap - 50_000_000) * 0.20;
        } 
     
        else {
            thue += (25_000_000 - 11_000_000) * 0.05 + (50_000_000 - 25_000_000) * 0.10 + (80_000_000 - 50_000_000) * 0.20 + (thuNhap - 80_000_000) * 0.30;
        }
    }

    return `Thuế phải nộp: ${thue.toLocaleString()} VND`;
}

alert(tinhThue());

//phai tinh theo tung khoang vi du 15tr thi 11tr< ko tinh con lai tinh 5%
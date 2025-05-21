function searchSquareNumber(){
    let a = prompt("nhap so can kiem tra: ");
    a = parseInt(a);
    if (a < 0) {
       return alert("so am k the la so chinh phuong!");
    }
    for (var i = 0; i * i <= a ; i++) {
        if (i * i === a) {
           return alert(a + " la so chinh phuong!");
           
        }
    }
    return alert(a + " khong phai la so chinh phuong!");

}
searchSquareNumber();
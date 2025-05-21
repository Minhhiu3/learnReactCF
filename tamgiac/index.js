function checkTriangle() {
    let a = Number(prompt("nhap a:"));
    let b = Number(prompt("nhap b:"));
    let c = Number(prompt("nhap c:"));

    if (a > 0 && b > 0 && c > 0) {
        if (a + b > c && a + c > b && b + c > a) {
            alert("tam giac");
        } else {
            alert("khong phai tam giac!");
        }
    } else {
        alert("Độ dài cạnh phải lớn hơn 0!");
    }
}

checkTriangle();

function taxiBill(){
    let km = parseFloat(prompt("Nhập km: "));
    if (km<0){
        alert("Nhập đúng số!");
        return;
    }
    else if (km <= 1){
        alert(`Thanh toán ${10000}`);
    }
    else if (km > 1 && km <= 30){
        alert(`Thanh toán ${(1*10000) + (km-1)*8000}`);
    }
    else if (km > 30){
        alert(`Thanh toán ${10000 + (29*8000) + (km-30)*7000}`);
    }
}
taxiBill();
//[Chưa đạt] Bài làm của em còn đang sai nhé.   alert(Thanh toán ${(1*10000) + (30*8000) + (km-30)*7000}); tại sao lại là 30*8000 thế :(
//249000
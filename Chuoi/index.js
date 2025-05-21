let myName = "";
console.log(myName.length); // 4
console.log(myName.charAt(0)); // h, retune ve string moi
console.log(myName[0]); // h, return ve string/undefined
//cap nhat chuoi
 myName[0] = "H" // khong lam gi ca, vi chuoi la immutable
 //khong the xoa hoac cap nhat 1 phan cua chuoi vi no la immutable
 delete myName[0] // khong lam gi ca, vi chuoi la immutable
 //delete myName // xoa bien myName
//vong lap qua chuoi 
for (let i = 0; i < myName.length; i++) {
    console.log(myName[i]);
}
//tim kiem vi tri cua ky tu trong chuoi

//-chuyen doi sang kieu chuoi
let myNumber = 1234;
console.log(myNumber.toString()); // "1234"
console.log(myNumber + ""); // "1234"
console.log(String(myNumber)); // "1234"
// toNumber("1234"); // 1234
// parseInt("1234"); // 1234

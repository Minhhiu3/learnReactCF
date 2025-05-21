//console.log({String});
//console.log({Number}); // 1234
//console.log(Number.parseFloat(1234.321)); // true
function randomRenderOtp() {
    let otp = Math.floor(Math.random() * 1000000); // random so tu 0 den 9999
    console.log(otp); // 1234
}

const arr = [1, 2, 3, 4, 5, 6];
function randomOtp(a) {
    let otp = "";

}
randomOtp(5); // random so tu 0 den 9999
//randomRenderOtp();

const listChar = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
function rentId(length, prefix = "") {
    let result = `${prefix}`; // gan prefix vao result
    if (prefix.length > 10) {
        return "prefix khong duoc qua 10 ky tu";
    }
    for (let i = 0; i < length; i++) {
        let random = Math.random() * (listChar.length)
        random = Math.floor(random); // lam tron ve so nguyen
        result+= random; // lay ra ky tu tu listChar
    }
    return result;


}
console.log(rentId(5)); // 1234
console.log(rentId(5, "abc")); // abc1234

// // console.log(typeof now);
// // console.log(now instanceof Date);
// // console.log(now);
// // console.log(now.getDate());
// // console.log(now.getMonth());
// // console.log(now.getTime() / 1000 / 60 / 60 / 24 / 365);
// // console.log(now.toLocaleString());
// console.log(now.toTimeString());

function homNay() {
    const now = new Date();
    const day = now.getUTCDay();
    const month = now.getMonth() + 1;
    const year = now.getFullYear();
    const fullNow = {};
    return document.writeln(`${year} - ${month} - ${day}`);
}
homNay();
console.log({ Date });

function coutDayLive(birthDay) {
    const birthDayy = new Date(birthDay);
    console.log(birthDayy);

}
coutDayLive("2004 - 15 - 12");

function MultiplicationTable(a) {
    console.log(`Bảng cửu chương ${a}:`);
    for (let i = 1; i <= 10; i++) {
        console.log(`${a} X ${i} = ${a * i}`);
    }
    console.log(""); 
}


for (let num = 1; num <= 10; num++) {
    MultiplicationTable(num);
}
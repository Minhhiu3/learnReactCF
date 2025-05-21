function checkSameSign(){
    let a = parseFloat(prompt("Nhập a: "));
    let b = parseFloat(prompt("Nhập b: "));
    
    if (a === 0 && b === 0) {
        alert("Ít nhất một số bằng 0");
    }
    else if (a === 0 && b > 0 || b === 0 && a > 0 ) {
        alert(`${a}, ${b} cùng dấu`);
    }
    else if (a === 0 && b < 0 || b === 0 && a < 0 ) {
        alert(`${a}, ${b} khác dấu`);
    }
    else if ((a > 0 && b > 0) || (a < 0 && b < 0)) {
        alert(`${a}, ${b} cùng dấu`);
    } else {
        alert(`${a}, ${b} khác dấu`);
    }

}

checkSameSign();
function printPrimeNumber(){
    let n = parseFloat(prompt("Nhập nn: "));

    if(n <= 1){
        return;
    }
if(n === 2){
        alert("Prime number: " + n);
        return;
    };
   
    for(let i = 2; i < n; i++){
        if(n % i === 0){
            alert("not Prime number: " + n);
            break;
        }else alert("Prime number: " + n);
    }
   
    
}

printPrimeNumber();
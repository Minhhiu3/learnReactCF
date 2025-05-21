// setTimeout(cancelIdleCallback, time(2000));
const a = 'ngu';
const b = 'vc';
// const timer1 = setTimeout(() => {
//     document.writeln(a);
//     return;
// }, 1000);

// const timer2 = setTimeout(() => {
//     document.writeln(b);
//     return;
// }, 2000);

// //clearTimeout(timer1, 1000);

function clock() {
    let secon = 0;
    let minute = 0;
    let hour = 0;
    setInterval(() => {
        secon++;
        if (secon === 5) {
            secon = 0;
            minute++;
        }
        if (minute === 5) {
            minute = 0;
            hour++;
        }
        document.getElementById('secon').innerText = secon;
        document.getElementById('minute').innerText = minute;
        document.getElementById('hour').innerText = hour;
    }, 1000);
}

function clockRealTime() {
    const now = new Date();
    const h = now.getHours().toString().padStart(2, '0');
    const m = now.getMinutes().toString().padStart(2, '0');
    const s = now.getSeconds().toString().padStart(2, '0');

    document.getElementById('clock').innerText = `${h}:${m}:${s}`;
}
clock()
setInterval(() => {
    clockRealTime()
}, 1000)
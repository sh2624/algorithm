function calc(n) {
    if (n >= 50 && n % 2 === 0) n /= 2;
    else if (n < 50 && n % 2 === 1) n = n * 2 + 1;
    return n;
}

function solution(arr) {
    let i = 0;
    while (true) {
        let before = arr, after = arr.map(val => calc(val));
        if (before.join() === after.join()) break;
        
        arr = after;
        i++;
    }
    
    return i;
}
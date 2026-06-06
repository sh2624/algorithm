function solution(a, b) {
    let sum = 0;
    if (a > b) {
        let tmp = a;
        a = b;
        b = tmp;
    }
    for (let i = a; i <= b; i++) sum += i;
    
    return sum;
}
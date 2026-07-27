function solution(n) {
    let i = 1;
    while (1) {
        if (i * 6 % n === 0) break;
        i++;
    }
    
    return i;
}
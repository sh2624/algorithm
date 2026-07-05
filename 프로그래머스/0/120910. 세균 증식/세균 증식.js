function solution(n, t) {
    let sum = n;
    for (let i = 0; i < t; i++) sum *= 2;
    
    return sum;
}
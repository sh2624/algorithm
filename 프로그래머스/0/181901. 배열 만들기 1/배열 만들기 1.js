function solution(n, k) {
    let arr = [];
    for (let i = 1; i * k <= n; i++) arr.push(i * k);
    
    return arr;
}
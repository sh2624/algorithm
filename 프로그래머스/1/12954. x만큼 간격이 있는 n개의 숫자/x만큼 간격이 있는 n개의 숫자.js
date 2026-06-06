function solution(x, n) {
    let arr = [], res = x;
    for (let i = 0; i < n; i++) {
        arr.push(res);
        res += x;
    }
    
    return arr;
}
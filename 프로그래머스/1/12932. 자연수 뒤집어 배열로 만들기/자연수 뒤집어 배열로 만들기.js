function solution(n) {
    let arr = [];
    let str = String(n);
    
    for (let i = str.length - 1; i >= 0; i--)
        arr.push(Number(str[i]));
    
    return arr;
}
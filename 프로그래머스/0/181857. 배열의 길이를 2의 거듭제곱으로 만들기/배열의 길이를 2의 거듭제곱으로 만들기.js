function solution(arr) {
    let targetLen = 1;
    while (targetLen < arr.length) targetLen *= 2;
    while (arr.length < targetLen) arr.push(0);
    
    return arr;
}
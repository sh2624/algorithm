function solution(array, n) {
    let cnt = 0;
    for (let num of array) {
        if (num === n) cnt++;
    }
    
    return cnt;
}
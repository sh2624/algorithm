function solution(arr, divisor) {
    let ans = arr.filter((num) => num % divisor === 0);
    
    return ans.length === 0 ? [-1] : ans.sort((a, b) => (a - b));
}
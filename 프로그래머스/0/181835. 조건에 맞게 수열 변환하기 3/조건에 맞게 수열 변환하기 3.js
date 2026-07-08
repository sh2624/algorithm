function solution(arr, k) {
    return arr.map(val => k % 2 === 1 ? val * k : val + k);
}
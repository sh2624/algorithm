function solution(arr, n) {
    if (arr.length % 2 === 1)
        return arr.map((val, idx) => idx % 2 === 0 ? val + n : val);
    return arr.map((val, idx) => idx % 2 === 1 ? val + n : val);
}
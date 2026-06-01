function solution(n) {
    const m = Math.sqrt(n);
    if (m % 1 === 0) return (m + 1) * (m + 1);
    else return -1;
}
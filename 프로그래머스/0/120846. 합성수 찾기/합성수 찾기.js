// 소수 판별 함수
function isPrime(x) {
    let cnt = 0;
    for (let i = 1; i <= x; i++) {
        if (x % i === 0) cnt++;
    }
    
    return (cnt === 2) ? 1 : 0;
}

function solution(n) {
    // 1을 제외하고, 소수가 아니면 합성수임
    let cnt = 0;
    for (let i = 4; i <= n; i++) {
        if (!isPrime(i)) cnt++;
    }
    
    return cnt;
}
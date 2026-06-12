// 약수의 개수 구하는 함수
function divisor(x) {
    let cnt = 0;
    for (let i = 1; i <= x; i++) {
        if (x % i === 0) cnt++;
    }
    
    return cnt;
}

function solution(left, right) {
    let sum = 0;
    for (let i = left; i <= right; i++) {
        if (divisor(i) % 2 === 0) sum += i;
        else sum -= i;
    }
    
    return sum;
}
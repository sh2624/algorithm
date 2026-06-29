// 최대공약수 구하는 함수
const getGcd = (x, y) => {
    let gcd;
    for (let i = 1; i <= Math.min(x, y); i++) {
        if (x % i === 0 && y % i === 0) gcd = i;
    }
    
    return gcd;
}

// 최소공배수 구하는 함수
const getLcm = (x, y) => {
    return x * y / getGcd(x, y);
}

function solution(n, m) {
    let arr = [];
    arr.push(getGcd(n, m));
    arr.push(getLcm(n, m));
    
    return arr;
}
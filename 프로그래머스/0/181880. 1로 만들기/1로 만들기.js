// 1로 만들기 위한 횟수 계산 함수
function cntMakeOne(n) {
    let count = 0;
    while (n !== 1) {
        if (n % 2 === 0) n /= 2;
        else n = (n - 1) / 2;
        count++;
    }
    
    return count;
}

function solution(num_list) {
    let cnt = 0;
    for (let num of num_list) cnt += cntMakeOne(num);
    
    return cnt;
}
function solution(s) {
    // 배열로 변환 후 조건에 맞게 계산
    let sum = 0, arr = s.split(' ');
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === 'Z') sum -= Number(arr[i - 1]);
        else sum += Number(arr[i]);
    }
    
    return sum;
}
function solution(l, r) {
    // 숫자 -> 문자 -> 쪼개기 -> 검사
    let arr = [];
    for (let i = l; i <= r; i++) {
        if (i.toString().split('').every(val => val === '0' || val === '5'))
            arr.push(i);
    }
    
    return arr.length === 0 ? [-1] : arr;
}
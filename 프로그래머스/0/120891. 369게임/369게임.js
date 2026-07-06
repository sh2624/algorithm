function solution(order) {
    // 문자열 배열로 쪼갠 후 걸러낸 길이 반환
    let arr = order.toString().split('');
    
    return arr.filter(val => val === '3' || val === '6' || val === '9').length;
}
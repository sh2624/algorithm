function solution(strArr) {
    // 원소 그룹 객체 생성 후 길이에 맞게 카운트
    let lenObj = {};
    for (let str of strArr) {
        let len = str.length;
        lenObj[len] = (lenObj[len] || 0) + 1;
    }
    
    // Object.values(객체): 값들만 빼서 배열로 만들어줌
    return Math.max(...Object.values(lenObj));
}
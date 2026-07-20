function solution(strArr) {
    // 'ad'를 포함하지 포함하지 않는 문자열만 걸러냄
    return strArr.filter(val => !val.includes('ad'));
}
function solution(myString) {
    // 쪼개고 공백 문자 제거 후 정렬
    return myString.split('x').filter(val => val !== '').sort();
}
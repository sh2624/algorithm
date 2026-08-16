function solution(array) {
    // 쭉 이어붙인 뒤 7로 쪼갠 조각 개수를 구함
    return array.join('').split('7').length - 1;
}
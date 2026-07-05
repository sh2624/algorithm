function solution(array, height) {
    // 머쓱이보다 큰 값의 배열만 남김
    return array.filter(x => x > height).length;
}
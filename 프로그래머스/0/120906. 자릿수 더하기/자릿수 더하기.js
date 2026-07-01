function solution(n) {
    // 쪼개서 숫자 배열로 만들고 더하기
    return n.toString()
            .split('')
            .map(Number)
            .reduce((acc, num) => acc + num, 0);
}
function solution(sides) {
    // 세 변 전체 합 - 최댓값 > 최댓값이면 삼각형 성립
    let max = Math.max(...sides);
    return sides.reduce((a, c) => a + c, 0) - max > max ? 1 : 2;
}
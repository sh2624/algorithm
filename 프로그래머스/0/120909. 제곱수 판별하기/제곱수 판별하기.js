function solution(n) {
    // 루트를 씌웠을 때 딱 나눠떨어지면(정수면) 제곱수임
    return Number.isInteger(Math.sqrt(n)) ? 1 : 2;
}
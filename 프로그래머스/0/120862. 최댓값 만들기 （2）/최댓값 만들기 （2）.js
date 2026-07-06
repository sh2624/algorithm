function solution(numbers) {
    // 오름차순 정렬 후, 양 끝 2개의 곱 중 최댓값 비교
    numbers.sort((a, b) => a - b);
    let num1 = numbers[0] * numbers[1];
    let num2 = numbers[numbers.length - 1] * numbers[numbers.length - 2];
    
    return num1 > num2 ? num1 : num2;
}
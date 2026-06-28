function solution(numbers) {
    // 첫 번째 최댓값
    let max1 = Math.max(...numbers); 
    
    // 배열에서 해당 값 제거
    let idx = numbers.indexOf(max1);
    numbers.splice(idx, 1);
    
    // 두 번째 최댓값
    let max2 = Math.max(...numbers);
    
    return max1 * max2;
}
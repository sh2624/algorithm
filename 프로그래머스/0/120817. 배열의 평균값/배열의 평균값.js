function solution(numbers) {
    let sum = 0;
    for (let char of numbers) sum += char;
    
    return sum / numbers.length;
}
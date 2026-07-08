function solution(num_str) {
    let sum = 0;
    [...num_str].filter(val => sum += Number(val));
    
    return sum;
}
function solution(s) {
    let arr = s.split(' ');
    let min = Math.min(...arr), max = Math.max(...arr);
    
    return String(min) + ' ' + String(max);
}
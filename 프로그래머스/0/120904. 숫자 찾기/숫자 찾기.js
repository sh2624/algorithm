function solution(num, k) {
    let index = num.toString().indexOf(String(k));
    
    if (index === -1) return -1;
    else return index + 1;
}
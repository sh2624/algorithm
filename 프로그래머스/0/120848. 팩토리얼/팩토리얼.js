function solution(n) {
    let i = 1, ans = 1;
    while (ans <= n) {
        i++;
        ans *= i;
    }
    
    return i - 1;
}
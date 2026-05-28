function solution(n) {
    let ans = [];
    ans.push(n);
    
    while (n !== 1) {
        if (n % 2 == 0) n /= 2;
        else n = 3 * n + 1;
        ans.push(n);
    }

    return ans;
}
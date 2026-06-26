function solution(my_string, n) {
    let ans = '';
    for (let char of my_string)
        ans += char.repeat(n);
    
    return ans;
}
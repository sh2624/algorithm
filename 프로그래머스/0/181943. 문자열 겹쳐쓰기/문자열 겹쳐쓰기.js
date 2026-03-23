function solution(my_string, overwrite_string, s) {
    let ans = "";
    let my_len = my_string.length;
    let over_len = overwrite_string.length;
    
    // s 전까지 추가
    for (let i = 0; i < s; i++) {
        ans += my_string[i];
    }
    
    // overwrite_string 추가
    ans += overwrite_string;
    
    // 뒷부분 추가
    for (let i = s + over_len; i < my_len; i++) {
        ans += my_string[i];
    }

    
    return ans;
}
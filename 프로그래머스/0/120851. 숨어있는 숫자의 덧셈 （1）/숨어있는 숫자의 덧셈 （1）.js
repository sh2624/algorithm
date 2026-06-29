function solution(my_string) {
    // 돌면서 숫자면 더하기
    let sum = 0;
    for (let i = 0; i < my_string.length; i++) {
        if ('1' <= my_string[i] && my_string[i] <= '9')
            sum += Number(my_string[i]);
    }
    
    return sum;
}
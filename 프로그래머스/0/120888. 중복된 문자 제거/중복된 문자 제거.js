function solution(my_string) {
    // Set - 중복 값을 허용하지 않음
    return [...new Set(my_string)].join('');
}
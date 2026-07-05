function solution(my_string) {
    return [...my_string].filter(val => (val >= '0') && (val <= '9'))
                         .sort()
                         .map(Number);
}
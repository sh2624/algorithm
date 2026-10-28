function solution(my_string) {
    return [...my_string].filter(char => char >= '0' && char <= '9')
                         .reduce((sum, num) => sum + Number(num), 0);
}
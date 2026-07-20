function solution(my_string, alp) {
    return my_string.split('')
                    .map(val => val === alp ? val.toUpperCase() : val)
                    .join('');
}
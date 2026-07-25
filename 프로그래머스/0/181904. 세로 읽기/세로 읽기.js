function solution(my_string, m, c) {
    let arr = [];
    for (let i = c - 1; i < my_string.length; i += m) arr.push(my_string[i]);
    
    return arr.join('');
}
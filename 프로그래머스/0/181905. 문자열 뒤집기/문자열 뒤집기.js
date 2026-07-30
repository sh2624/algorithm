function solution(my_string, s, e) {
    let front = [...my_string].slice(0, s).join('');
    let reversed = [...my_string].slice(s, e + 1).reverse().join('');
    let back = [...my_string].slice(e + 1).join('');
    
    return front + reversed + back;
}
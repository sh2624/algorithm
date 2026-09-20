function solution(my_string) {
    const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    let res = Array(52).fill(0);
    
    for (let char of my_string)
        res[alphabet.indexOf(char)]++;
    
    return res;
}
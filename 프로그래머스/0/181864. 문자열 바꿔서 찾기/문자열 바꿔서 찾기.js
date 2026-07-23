function solution(myString, pat) {
    let str = myString.split('').map(val => val === 'A' ? 'B' : 'A').join('');
    return str.includes(pat) ? 1 : 0;
}
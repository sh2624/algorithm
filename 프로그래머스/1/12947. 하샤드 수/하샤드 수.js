function solution(x) {
    let sum = 0, str = String(x);
    for (let i = 0; i < str.length; i++)
        sum += Number(str[i]);
    
    return (x % sum === 0) ? true : false;
}
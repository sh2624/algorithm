function solution(n)
{
    let sum = 0;
    let str = String(n);
    
    for (let i of str) sum += Number(i);
    
    return sum;
}
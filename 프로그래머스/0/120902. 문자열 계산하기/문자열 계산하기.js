function solution(my_string) {
    let chop = my_string.split(' ');
    let res = Number(chop[0]);
    
    // 연산자 인덱스 = 홀수
    for (let i = 1; i < chop.length; i += 2) {
        if (chop[i] === '+') res += Number(chop[i + 1]);
        else if (chop[i] === '-') res -= Number(chop[i + 1]);
    }
    
    return res;
}
function solution(intStrs, k, s, l) {
    let result = [];
    for (let num of intStrs) {
        let chunk = num.slice(s, s + l);
        if (chunk > k) result.push(Number(chunk));
    }
    
    return result;
}
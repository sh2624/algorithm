function solution(myString, pat) {
    // pat의 길이만큼 잘라서 검사
    let cnt = 0;
    for (let i = 0; i < myString.length; i++) {
        let part = myString.slice(i, i + pat.length);
        if (part === pat) cnt++;
    }
    
    return cnt;
}
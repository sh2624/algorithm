function solution(strlist) {
    // 배열에 각 문자열 길이를 저장
    let arr = [];
    for (let i = 0; i < strlist.length; i++)
        arr.push(strlist[i].length);
    
    return arr;
}
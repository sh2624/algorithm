function solution(myStr) {
    // a, b, c 기준으로 쪼개고 공백 제거
    let arr = myStr.split(/[abc]/).filter(val => val !== '');
    return arr.length === 0 ? ["EMPTY"] : arr;
}
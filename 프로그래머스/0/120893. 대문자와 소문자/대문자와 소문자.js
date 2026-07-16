function solution(my_string) {
    // 쪼개서 한 글자씩 바꾸고 합치기
    return [...my_string].map(char => {
        if (char === char.toUpperCase()) return char.toLowerCase();
        else return char.toUpperCase();
    }).join('');
}
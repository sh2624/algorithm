function solution(age) {
    // 쪼개서 배열로 변환 -> 아스키코드 변환 -> 합치기
    return age.toString()
              .split('')
              .map(val => String.fromCharCode(Number(val) + 97))
              .join('');
}
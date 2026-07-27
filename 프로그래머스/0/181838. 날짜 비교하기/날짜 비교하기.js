function solution(date1, date2) {
    // new Date(연, 월, 일) - 실제 날짜 객체로 변환
    let d1 = new Date(date1[0], date1[1], date1[2]);
    let d2 = new Date(date2[0], date2[1], date2[2]);
    
    return d1 < d2 ? 1 : 0;
}
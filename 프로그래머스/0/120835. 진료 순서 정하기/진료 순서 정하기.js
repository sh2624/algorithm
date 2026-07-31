function solution(emergency) {
    // 내림차순 정렬 후 해당 값이 몇 번째 인덱스인지 검색
    let sorted = [...emergency].sort((a, b) => b - a);
    
    return emergency.map(val => sorted.indexOf(val) + 1);
}
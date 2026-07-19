function solution(arr, queries) {
    return queries.map(([s, e, k]) => {
        // 필터링 후 최솟값 찾기
        let filteredArr = arr.slice(s, e + 1).filter(val => val > k);
        let minVal = Math.min(...filteredArr);
        
        // 빈 배열일 경우 -1 반환
        return minVal === Infinity ? -1 : minVal;
    });
}
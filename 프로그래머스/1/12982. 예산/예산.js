function solution(d, budget) {  
  let cnt = 0;
  d.sort((a, b) => a - b); // 오름차순 정렬
  
  for (let i = 0; i < d.length; i++) {
      if (budget >= d[i]) {
          cnt++;
          budget -= d[i];
      }
      else break;
  }
  
  return cnt;
}
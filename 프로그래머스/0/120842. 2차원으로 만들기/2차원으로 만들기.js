function solution(num_list, n) {
    // n개씩 잘라서 집어넣기
    let ans = [];
    for (let i = 0; i < num_list.length; i += n) {
        let chunk = num_list.slice(i, i + n);
        ans.push(chunk);
    }
    
    return ans;
}
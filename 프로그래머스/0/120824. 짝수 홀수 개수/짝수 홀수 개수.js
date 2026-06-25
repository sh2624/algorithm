function solution(num_list) {
    let cnt = 0;
    for (let int of num_list) {
        if (int % 2 === 0) cnt++;
    }
    
    return [cnt, num_list.length - cnt];
}
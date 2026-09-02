function solution(arr, queries) {
    for (let [a, b] of queries)
        [arr[a], arr[b]] = [arr[b], arr[a]];
    
    return arr;
}


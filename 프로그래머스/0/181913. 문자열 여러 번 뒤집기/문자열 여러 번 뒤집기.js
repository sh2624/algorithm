function solution(my_string, queries) {
    let arr = [...my_string];
    
    // 범위 안에 뒤집은 것들 끼워넣기
    for (let [s, e] of queries) {
        let reversed = arr.slice(s, e + 1).reverse();
        arr.splice(s, reversed.length, ...reversed);
    }
    
    return arr.join('');
}
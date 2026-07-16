function solution(arr) {
    let i = 0, stk = [];
    while (i < arr.length) {
        if (!stk.length) stk.push(arr[i++]); // 빈 배열일 경우
        else { 
            if (stk[stk.length - 1] < arr[i]) stk.push(arr[i++]);
            else stk.splice(stk.pop());
        }
    }
    
    return stk;
}
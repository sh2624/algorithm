function solution(arr, flag) {
    let x = [];
    for (let i = 0; i < flag.length; i++) {
        if (flag[i]) {
            for (let j = 0; j < arr[i] * 2; j++)
                x.push(arr[i]);
        }
        else {
            for (let k = 0; k < arr[i]; k++)
                x.pop();
        }
    }
    
    return x;
}
function solution(arr, delete_list) {
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        let flag = false;
        for (let j = 0; j < delete_list.length; j++) {
            if (arr[i] === delete_list[j]) {
                flag = true;
                break;
            }
        }
        if (!flag) result.push(arr[i]);
    }
    
    return result;
}
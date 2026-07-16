function solution(arr, delete_list) {
    // 포함돼있지 않은 요소만 걸러냄
    return arr.filter(val => !delete_list.includes(val));
}
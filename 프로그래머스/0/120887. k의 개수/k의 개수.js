function solution(i, j, k) {
    // 숫자 쭉 이어붙인 뒤, k로 쪼갰을 때 나오는 조각 수 반환
    let str = '';
    for (let num = i; num <= j; num++)
        str += num;
    
    return str.split(String(k)).length - 1;
}
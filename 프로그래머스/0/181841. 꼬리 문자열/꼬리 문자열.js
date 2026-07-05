function solution(str_list, ex) {
    // ex를 포함하지 않는 요소들만 걸러서 합침
    return str_list.filter(val => !val.includes(ex)).join('');
}
function solution(my_string) {
    // 모음을 찾아서 지우기
    return my_string
        .replaceAll('a', '')
        .replaceAll('e', '')
        .replaceAll('i', '')
        .replaceAll('o', '')
        .replaceAll('u', '');  
}
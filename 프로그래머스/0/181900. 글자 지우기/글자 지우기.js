function solution(my_string, indices) {
    // indices에 포함되지 않은 인덱스의 문자열만 남김
    return [...my_string].filter((_, idx) => !indices.includes(idx))
                         .join('');
}
function solution(s) {
    // 쪼개서 첫 번째는 대문자로, 나머지는 소문자로 만들고 다시 합침
    return s.split(' ')
            .map(word => word.length === 0 ? '' : word[0].toUpperCase()
                 + word.slice(1).toLowerCase())
            .join(' ');
}
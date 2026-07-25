function solution(myString) {
    return [...myString].map(val => val < 'l' ? 'l' : val)
                        .join('');
}
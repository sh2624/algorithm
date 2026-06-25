function solution(s){
    // 첫 시작이 '('이 아니거나 길이가 홀수면 false 
    if (s[0] !== '(' || s.length % 2 === 1) return false;
    
    // 스택에 넣고 짝이 맞는지 검사
    let stack = [];
    for (let char of s) {
        if (char === '(') stack.push(char);
        else {
            if (stack.length === 0) return false;
            stack.pop();
        }
    }
    
    return stack.length === 0;
}
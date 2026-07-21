function solution(A, B) {    
    // A, B 오름차순 정렬
    A.sort((a, b) => a - b);
    B.sort((a, b) => a - b);
    
    let sum = 0, len = A.length;
    for (let i = 0; i < len; i++) {
        // A의 맨 앞, B의 맨 뒤 요소끼리 곱해서 더함
        sum += A[0] * B[B.length - 1];
        
        // A의 맨 앞, B의 맨 뒤 요소 제거
        A.splice(0, 1);
        B.pop();
    }
    
    return sum;
}
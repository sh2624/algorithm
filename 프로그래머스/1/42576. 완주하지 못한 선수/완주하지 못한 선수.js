function solution(participant, completion) {
    // 배열 정렬
    participant.sort();
    completion.sort();
    
    // 짝이 다르면 미완주 참가자임
    for (let i = 0; i < participant.length; i++) {
        if (participant[i] !== completion[i]) return participant[i];
    }
}
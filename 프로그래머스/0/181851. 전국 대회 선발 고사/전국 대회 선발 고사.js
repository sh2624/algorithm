function solution(rank, attendance) {
    const sorted = rank.map((rank, idx) => ({rank: rank, index: idx}))
                       .filter((student) => attendance[student.index])
                       .sort((a, b) => a.rank - b.rank);
    
    return 10000 * sorted[0].index + 100 * sorted[1].index + sorted[2].index;
}
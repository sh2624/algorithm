function solution(num_list) {
    let sumOdd = num_list.filter((val, idx) => idx % 2 === 1)
                         .reduce((acc, cur) => acc + cur, 0);
    let sumEven = num_list.filter((val, idx) => idx % 2 === 0)
                          .reduce((acc, cur) => acc + cur, 0);
    
    return sumOdd > sumEven ? sumOdd : sumEven;
}
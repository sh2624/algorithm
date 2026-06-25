function solution(money) {
    let arr = [], cups = Math.floor(money / 5500);
    arr.push(cups);
    arr.push(money - cups * 5500);
    
    return arr;
}
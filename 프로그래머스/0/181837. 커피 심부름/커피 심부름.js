function solution(order) {
    // 메뉴명에 'latte'가 있으면 5000원, 나머지는 4500원
    return order.reduce((acc, cur) => acc + (cur.includes('latte') ? 5000 : 4500), 0);
}
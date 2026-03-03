#include <iostream>
using namespace std;

class Queue
{
private:
    int data[1000001];        // 큐 용량
    int head = -1, tail = -1; // 큐의 시작/끝 인덱스

public:
    void push(int x)
    {
        data[++tail] = x; // 큐의 맨 뒤에 요소 추가
    }

    void pop()
    {
        data[++head]; // 큐의 맨 앞 요소 제거
    }

    int front()
    {
        return data[head + 1]; // 큐의 맨 앞 요소 반환
    }

    bool empty()
    {
        if (head + 1 == tail) // 이 문제의 종료 조건 검사 (숫자 하나만 남아야 함)
            return 0;
        else
            return 1;
    }
};

Queue q; // 큐 용량이 크니 전역 변수로 선언 (데이터 영역)

int main()
{
    int n;
    cin >> n; // 정수 입력

    // 큐에 n개의 카드 순서대로 삽입
    for (int i = 1; i <= n; i++)
        q.push(i);

    // 숫자가 하나만 남으면 종료
    while (q.empty())
    {
        q.pop();           // 제일 위에 있는 카드 버리기
        q.push(q.front()); // 그다음 위에 있는 카드를 제일 아래로 복사
        q.pop();           // 제일 위에 있는 카드 버리기
    }

    cout << q.front(); // 제일 마지막에 남는 카드 출력

    return 0;
}
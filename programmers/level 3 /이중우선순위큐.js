// 이중 우선순위 큐는 다음 연산을 할 수 있는 자료구조를 말합니다.

/* I 숫자	큐에 주어진 숫자를 삽입합니다.
D 1	큐에서 최댓값을 삭제합니다.
D -1	큐에서 최솟값을 삭제합니다.
이중 우선순위 큐가 할 연산 operations가 매개변수로 주어질 때, 모든 연산을 처리한 후 큐가 비어있으면 [0,0] 
비어있지 않으면 [최댓값, 최솟값]을 return 하도록 solution 함수를 구현해주세요.*/

// ex) ["I 16", "I -5643", "D -1", "D 1", "D 1", "I 123", "D -1"]	[0,0]

function solution(operations) {
    const arr = [];
    
    operations.forEach(e => {
        const [word, num] = e.split(' ');
        
        if (word == 'I') arr.push(parseInt(num));
        
        if (word == 'D' && arr.length) {
            if (num == 1) arr.splice(arr.indexOf(Math.max(...arr)), 1);
            if (num == -1) arr.splice(arr.indexOf(Math.min(...arr)), 1);
        }
    })
    
    return [Math.max(...arr)|0 , Math.min(...arr)|0];
}


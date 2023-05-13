// 정수 배열 array가 매개변수로 주어질 때, 가장 큰 수와 그 수의 인덱스를 담은 배열을 return 하도록 solution 함수를 완성해보세요.

function solution(array) {
    const result = [];
    const max = Math.max(...array);
    result.push(max);
    result.push(array.findIndex(num => num === max));
    return result;
}

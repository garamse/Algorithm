// 길이가 같은 배열 A, B 두개가 있습니다. 각 배열은 자연수로 이루어져 있습니다.
// 배열 A, B에서 각각 한 개의 숫자를 뽑아 두 수를 곱합니다. 이러한 과정을 배열의 길이만큼 반복하며, 두 수를 곱한 값을 누적하여 더합니다. 이때 최종적으로 누적된 값이 최소가 되도록 만드는 것이 목표입니다.

function solution(A,B){
    let result = 0;
    A.sort((a,b)=> a-b); 
    B.sort((a,b)=> b-a);
    
    for(let i = 0; i < A.length; i++) {
       result += A[i] * B[i];
    }
    return result;
}

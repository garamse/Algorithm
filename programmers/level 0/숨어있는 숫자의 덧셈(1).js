// 문자열 my_string이 매개변수로 주어집니다. my_string안의 모든 자연수들의 합을 return하도록 solution 함수를 완성해주세요.


function solution(my_string) {
  const num = my_string.split("");
  let result = 0;
  
  for(let i = 0; i < num.length; i++){
    if(Number(num[i])) {           // 문자는 NaN 반환 
    result += Number(num[i])       
    }
  }
  return result;
}
// 자연수 n을 뒤집어 각 자리 숫자를 원소로 가지는 배열 형태로 리턴해주세요.

  def solution(n):
    result = [int(num) for num in str(n)[::-1]]
    
    return result

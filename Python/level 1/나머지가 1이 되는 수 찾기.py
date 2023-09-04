// 자연수 n이 매개변수로 주어집니다.
// n을 x로 나눈 나머지가 1이 되도록 하는 가장 작은 자연수 x를 return 하도록 solution 함수를 완성해주세요.

  def solution(n):
    num = 1
    while num < n:
        if n % num == 1:
            return num
        num += 1

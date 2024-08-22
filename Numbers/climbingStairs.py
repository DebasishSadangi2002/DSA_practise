class Solution:
    def climbStairs(self, n: int) -> int:
        first = 1
        second = 2
        if n == 1:
            return first
        if n == 2:
            return second
        third = 0
        for i in range(3, n+1):
            third = first + second
            first = second
            second = third
        return third

        
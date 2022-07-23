class Solution:
    def climbStairs(self, n: int) -> int:
        if n < 3: return n
        f1, f2 = 1, 2
        while n > 2:
            tmp = f2
            f2 += f1
            f1 = tmp
            n -= 1
        return f2
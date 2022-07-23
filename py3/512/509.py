class Solution:
    def fib(self, n: int) -> int:
        if n < 2: return n
        f0, f1 = 0, 1
        while n > 1:
            tmp = f1
            f1 += f0
            f0 = tmp
            n -= 1
        return f1
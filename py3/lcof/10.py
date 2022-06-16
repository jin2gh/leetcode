class Solution:
    # 10-I
    def fib(self, n: int) -> int:
        MOD = 1000000007
        f0, f1 = 0, 1
        if n < 2: return n
        for i in range(n - 1):
            tmp = f0 + f1
            f0 = f1
            f1 = tmp % MOD

        return f1

    # 10-II
    def numWays(self, n: int) -> int:
        MOD = 1000000007
        f0, f1 = 1, 1
        for i in range(n - 1): # (2, n - 1)
            tmp = f0 + f1
            f0 = f1
            f1 = tmp % MOD

        return f1
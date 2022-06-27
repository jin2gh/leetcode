class Solution:
    def sumNums(self, n: int) -> int:
        self.total = 0
        def sums(n):
            n and sums(n - 1)
            self.total += n

        sums(n)
        return self.total
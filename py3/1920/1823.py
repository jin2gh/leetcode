class Solution:
    def findTheWinner(self, n: int, k: int) -> int:
        if k == 1:
            return n
        ans = 0
        for i in range(2, n + 1):
            ans = (ans + k) % i

        return ans + 1
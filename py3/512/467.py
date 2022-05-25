from collections import defaultdict

class Solution:
    def findSubstringInWraproundString(self, p: str) -> int:
        dp = defaultdict(int)
        cnt = 0
        for i, v in enumerate(p):
            if i > 0 and ((ord(v) - ord(p[i - 1])) % 26 == 1): # -25 % 26 == 1
                cnt += 1
            else:
                cnt = 1
            dp[v] = max(dp[v], cnt)

        return sum(dp.values())
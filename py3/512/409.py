class Solution:
    def longestPalindrome(self, s: str) -> int:
        ht = {}
        for v in s:
            if v in ht: ht[v] += 1
            else: ht[v] = 1
        ans = 0
        is_odd = False
        for v in ht:
            if ht[v] % 2:
                is_odd = True
                ht[v] -= 1
            ans += ht[v]
        return ans if not is_odd else ans + 1
class Solution:
    def findTheDifference(self, s: str, t: str) -> str:
        ht = {}
        ans = ''
        for c in s:
            if c in ht:
                ht[c] += 1
            else:
                ht[c] = 1
        for c in t:
            if c not in ht or ht[c] == 0:
                ans = c
                break
            ht[c] -= 1
        return ans
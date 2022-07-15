class Solution:
    def isIsomorphic(self, s: str, t: str) -> bool:
        n = len(s)
        sht, tht = {}, {}
        for i in range(n):
            if (s[i] in sht and sht[s[i]] != t[i]) or (t[i] in tht and tht[t[i]] != s[i]):
                return False
            sht[s[i]] = t[i]
            tht[t[i]] = s[i]

        return True
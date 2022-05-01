class Solution:
    def areAlmostEqual(self, s1: str, s2: str) -> bool:
        m, n = len(s1), len(s2)
        if m != n:
            return False
        cnt = 0
        ht = {}
        for i in range(m):
            if s1[i] != s2[i]:
                cnt += 1
            if cnt > 2:
                return False
            if s1[i] in ht:
                ht[s1[i]] += 1
            else:
                ht[s1[i]] = 1
            if s2[i] in ht:
                ht[s2[i]] -= 1
            else:
                ht[s2[i]] = -1
        for k in ht:
            if ht[k] != 0:
                return False
        return cnt == 2 or cnt == 0
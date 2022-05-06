class Solution:
    def isAnagram(self, s: str, t: str) -> bool:
        if len(s) != len(t):
            return False
        ht = {}
        for ch in s:
            if ch in ht:
                ht[ch] += 1
            else:
                ht[ch] = 1
        for ch in t:
            if ch in ht:
                ht[ch] -= 1
            else:
                return False
        for ch in ht:
            if ht[ch] != 0:
                return False
        return True
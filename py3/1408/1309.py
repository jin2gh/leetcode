class Solution:
    def freqAlphabets(self, s: str) -> str:
        i, n = 0, len(s)
        ans, asc_a = '', 96
        while i < n:
            if i + 2 < n and s[i + 2] == '#':
                ans += chr(int(s[i:i+2]) + asc_a)
                i += 3
            else:
                ans += chr(int(s[i]) + asc_a)
                i += 1
        return ans
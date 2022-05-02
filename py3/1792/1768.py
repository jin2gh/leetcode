class Solution:
    def mergeAlternately(self, word1: str, word2: str) -> str:
        ans = ''
        m, n = len(word1), len(word2)
        i, j = 0, 0
        while i < m or j < n:
            if i == m:
                ans += word2[i:]
                break
            if j == n:
                ans += word1[j:]
                break
            ans += word1[i]
            ans += word2[j]
            i += 1
            j += 1
        return ans
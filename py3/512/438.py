from typing import List

class Solution:
    def findAnagrams(self, s: str, p: str) -> List[int]:
        len_s, len_p = len(s), len(p)
        ans = []
        if len_s < len_p:
            return ans
        cnt_s, cnt_p = [0] * 26, [0] * 26
        ord_a = ord('a')
        for i in range(len_p):
            cnt_s[ord(s[i]) - ord_a] += 1
            cnt_p[ord(p[i]) - ord_a] += 1
        if cnt_s == cnt_p:
            ans.append(0)
        for i in range(len_s - len_p):
            cnt_s[ord(s[i]) - ord_a] -= 1
            cnt_s[ord(s[i + len_p]) - ord_a] += 1
            if cnt_s == cnt_p:
                ans.append(i + 1)

        return ans
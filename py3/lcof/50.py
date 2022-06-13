class Solution:
    def firstUniqChar(self, s: str) -> str:
        dic, s_len = {}, len(s)
        for i, v in enumerate(s):
            if v in dic:
                dic[v] = -1
            else:
                dic[v] = i
        idx = s_len
        for v in dic.values():
            if v > -1 and v < idx:
                idx = v
        return s[idx] if idx < s_len else ' '
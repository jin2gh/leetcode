class Solution:
    def replaceSpace(self, s: str) -> str:
        res = ''
        for ch in s:
            res += ch if ch != ' ' else '%20'
        return res

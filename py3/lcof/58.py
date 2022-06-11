class Solution:
    def reverseLeftWords(self, s: str, n: int) -> str:
        # 字符串切片
        return s[n:] + s[:n]

    def reverseLeftWords1(self, s: str, n: int) -> str:
        # 字符串添加
        res = ''
        for i in range(n, len(s)):
            res += s[i]
        for i in range(n):
            res += s[i]
        return res

    def reverseLeftWords2(self, s: str, n: int) -> str:
        # 字符串列表添加，与 1 的差别在于：因为字符串不可变，直接拼接字符串，每次都要申请内存
        res = []
        for i in range(n, len(s)):
            res.append(s[i])
        for i in range(n):
            res.append(s[i])
        return ''.join(res)
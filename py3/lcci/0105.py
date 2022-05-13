class Solution:
    def oneEditAway(self, first: str, second: str) -> bool:
        m, n = len(first), len(second)
        if m < n:
            return self.oneEditAway(second, first)
        if m - n > 1:
            return False
        p1, p2, cnt = 0, 0, 0
        while p1 < m and p2 < n and cnt < 2:
            if first[p1] != second[p2]:
                cnt += 1
                if m > n:
                    p1 += 1
                    continue
            p1 += 1
            p2 += 1

        return cnt < 2
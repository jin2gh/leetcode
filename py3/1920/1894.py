from typing import List

class Solution:
    def chalkReplacer(self, chalk: List[int], k: int) -> int:
        n = len(chalk)
        sums = [0]
        for i in range(n):
            sums.append(sums[-1] + chalk[i])
            if sums[-1] > k:
                return i

        rmd = k % sums[-1]
        if rmd == 0:
            return 0

        l, r = 1, n
        while l < r:
            m = l + (r - l) // 2
            if sums[m] > rmd:
                r = m
            else:
                l = m + 1

        return r - 1
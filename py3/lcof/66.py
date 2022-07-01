from typing import List

class Solution:
    def constructArr(self, a: List[int]) -> List[int]:
        n = len(a)
        idx = n - 1
        # lefts, rights, ans = [1] * n, [1] * n, [1] * n
        # for i in range(1, n):
        #     lefts[i] = lefts[i - 1] * a[i - 1]
        #     rights[idx - i] = rights[idx - i + 1] * a[idx - i + 1]

        # for i in range(n):
        #     ans[i] = lefts[i] * rights[i]

        # return ans

        ans = [1] * n
        for i in range(1, n):
            ans[i] = ans[i - 1] * a[i - 1]

        R = 1
        for i in range(n):
            ans[idx - i] *= R
            R *= a[idx - i]

        return ans
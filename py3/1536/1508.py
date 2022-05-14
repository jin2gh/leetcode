from typing import List

class Solution:
    def rangeSum(self, nums: List[int], n: int, left: int, right: int) -> int:
        M = 10 ** 9 + 7
        subs = []
        for i in range(n):
            t = 0
            for j in range(i, n):
                t += nums[j]
                subs.append(t)
        subs.sort()
        return sum(subs[left - 1:right]) % M
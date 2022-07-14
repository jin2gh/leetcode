from typing import List

class Solution:
    def pivotIndex(self, nums: List[int]) -> int:
        n = len(nums)
        left, total = 0, sum(nums)
        for i in range(n):
            if left * 2 + nums[i] == total: return i
            left += nums[i]

        return -1
        # n = len(nums)
        # maxi = n - 1
        # lefts, rights = [0] * n, [0] * n
        # for i in range(1, n):
        #     lefts[i] = lefts[i - 1] + nums[i - 1]
        #     rights[maxi - i] = rights[maxi - i + 1] + nums[maxi - i + 1]
        # for i in range(n):
        #     if lefts[i] == rights[i]: return i
        # return -1
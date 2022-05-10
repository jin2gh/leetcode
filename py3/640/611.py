from typing import List

class Solution:
    def triangleNumber(self, nums: List[int]) -> int:
        nums.sort()
        ans, n = 0, len(nums)
        for i in range(n):
            for j in range(i + 1, n):
                l, r = j + 1, n - 1
                while l <= r:
                    m = l + (r - l) // 2
                    if nums[m] < nums[i] + nums[j]:
                        l = m + 1
                    else:
                        r = m - 1
                ans += l - 1 - j
        return ans
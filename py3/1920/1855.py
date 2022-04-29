from typing import List

class Solution:
    def maxDistance(self, nums1: List[int], nums2: List[int]) -> int:
        r2 = len(nums2) - 1
        ans = 0
        for i, v in enumerate(nums1):
            l, r = i, r2
            while l <= r:
                m = l + (r - l) // 2
                if nums2[m] < v:
                    r = m - 1
                else:
                    l = m + 1
            ans = max(ans, l - i - 1)

        return ans
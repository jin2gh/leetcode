from typing import List

class Solution:
    def intersect(self, nums1: List[int], nums2: List[int]) -> List[int]:
        if len(nums1) > len(nums2):
            return self.intersect(nums2, nums1)
        ht = {}
        for v in nums1:
            if v in ht:
                ht[v] += 1
            else:
                ht[v] = 1
        ans = []
        for v in nums2:
            if v in ht:
                if ht[v] > 0:
                    ans.append(v)
                    ht[v] -= 1

        return ans
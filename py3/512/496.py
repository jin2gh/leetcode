from typing import List

class Solution:
    def nextGreaterElement(self, nums1: List[int], nums2: List[int]) -> List[int]:
        ht = {}
        stack = []
        for v in nums2[::-1]:
            while stack and v > stack[-1]:
                stack.pop()
            ht[v] = stack[-1] if stack else -1
            stack.append(v)

        return [ht[v] for v in nums1]

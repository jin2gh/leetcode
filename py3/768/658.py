from typing import List

class Solution:
    def findClosestElements(self, arr: List[int], k: int, x: int) -> List[int]:
        if x < arr[0]:
            return arr[:k]
        if x > arr[-1]:
            return arr[-k:]
        l, r = 0, len(arr) - k
        while l < r:
            m = l + (r - l) // 2
            if x - arr[m] <= arr[m + k] - x:
                r = m
            else:
                l = m + 1
        return arr[l:l + k]
from typing import List


class Solution:
    def checkIfExist(self, arr: List[int]) -> bool:
        arr.sort()
        n = len(arr)
        for i, v in enumerate(arr):
            l, r = i + 1, n - 1
            if v < 0:
                l, r = 0, i - 1
            while l <= r:
                m = l + (r - l) // 2
                t = v * 2
                if arr[m] == t:
                    return True
                if arr[m] < t:
                    l = m + 1
                else:
                    r = m - 1

        return False
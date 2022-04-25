class Solution:
    def peakIndexInMountainArray(self, arr: List[int]) -> int:
        l, r = 1, len(arr) - 2
        ans = 0
        while (l <= r):
            m = l + (r - l) // 2
            if (arr[m] < arr[m + 1]):
                ans = m + 1
                l = m + 1
            else:
                ans = m
                r = m - 1
        return ans
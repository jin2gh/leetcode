from typing import List

class Solution:
    def findRightInterval(self, intervals: List[List[int]]) -> List[int]:
        def sort_key(nums):
            return nums[0]
        def search_index(intervals, x):
            l, r = 0, len(intervals) - 1
            if intervals[r][0] < x:
                return -1
            while l < r:
                m = l + (r - l) // 2
                if intervals[m][0] == x: # 每个区间的 start 都是唯一的，当 start == end，一定是最小的
                    r = m
                    break
                if intervals[m][0] < x:
                    l = m + 1
                else:
                    r = m
            return r

        ht = {v[0]: i for i, v in enumerate(intervals)}
        ans = [-1] * len(intervals)
        intervals.sort(key=sort_key)

        for v in intervals:
            idx = search_index(intervals, v[1])
            if idx >= 0:
                ans[ht[v[0]]] = ht[intervals[idx][0]]

        return ans
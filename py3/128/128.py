from typing import List

class Solution:
    def longestConsecutive(self, nums: List[int]) -> int:
        num_set = set(nums)
        ans = 0
        for k in num_set:
            if k - 1 not in num_set:
                cnt = 1
                while k + 1 in num_set:
                    cnt += 1
                    k += 1

                ans = max(ans, cnt)

        return ans

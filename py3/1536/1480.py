from typing import List

class Solution:
    def runningSum(self, nums: List[int]) -> List[int]:
        t = 0
        ans = []
        for v in nums:
            t += v
            ans.append(t)

        return ans
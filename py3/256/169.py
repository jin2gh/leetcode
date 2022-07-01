from typing import List

class Solution:
    def majorityElement(self, nums: List[int]) -> int:
        ans, cnt = None, 0
        for v in nums:
            if cnt == 0:
                ans = v
                cnt += 1
                continue
            cnt += (1 if ans == v else -1)

        return ans
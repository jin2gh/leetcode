from typing import List

class Solution:
    def twoSum(self, nums: List[int], target: int) -> List[int]:
        dic = {}
        for i, v in enumerate(nums):
            diff = target - v
            if diff in dic:
                return [dic[diff], i]
            dic[v] = i
        return []
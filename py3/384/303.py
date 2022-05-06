from typing import List

class NumArray:
    def __init__(self, nums: List[int]):
        cur_sum = 0
        self.sums = [0]
        for v in nums:
            cur_sum += v
            self.sums.append(cur_sum)

    def sumRange(self, left: int, right: int) -> int:
        return self.sums[right + 1] - self.sums[left]


# Your NumArray object will be instantiated and called as such:
# obj = NumArray(nums)
# param_1 = obj.sumRange(left,right)
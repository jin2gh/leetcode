from typing import List

class Solution:
    def lengthOfLIS(self, nums: List[int]) -> int:
        ins = []
        for v in nums:
            if not ins or v > ins[-1]:
                ins.append(v)
            else:
                n = len(ins)
                l, r = 0, n - 1
                while l < r:
                    m = l + (r - l) // 2
                    if ins[m] >= v:
                        r = m
                    else:
                        l = m + 1
                ins[l] = v
        return len(ins)
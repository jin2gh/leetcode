from typing import List

class Solution:
    def sortByBits(self, arr: List[int]) -> List[int]:
        def sort(n):
            cnt, num = 0, n
            while num > 0:
                num &= num - 1
                cnt += 1
            return cnt, n

        arr.sort(key=sort)
        return arr
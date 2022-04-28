from math import floor, sqrt

class Solution:
    def judgeSquareSum(self, c: int) -> bool:
        l, r = 0, floor(sqrt(c))
        while l <= r:
            tmp = l * l + r * r
            if tmp == c:
                return True
            if tmp < c:
                l += 1
            else:
                r -= 1
        return False

# The guess API is already defined for you.
# @param num, your guess
# @return -1 if my number is lower, 1 if my number is higher, otherwise return 0
# def guess(num: int) -> int:

class Solution:
    def guessNumber(self, n: int) -> int:
        l, r = 1, n
        while(l < r):
            m = l + (r - l) // 2
            ans = guess(m)
            if ans == 0:
                return m
            elif ans == 1:
                l = m + 1
            else:
                r = m
        return l
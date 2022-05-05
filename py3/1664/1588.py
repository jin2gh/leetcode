from typing import List

class Solution:
    def sumOddLengthSubarrays(self, arr: List[int]) -> int:
        arr_sum, n = 0, len(arr)
        for i in range(n):
            cnt_l, cnt_r = i, n - 1 - i
            odd_l = (cnt_l + 1) // 2
            odd_r = (cnt_r + 1) // 2
            even_l = cnt_l // 2 + 1
            even_r = cnt_r // 2 + 1
            arr_sum += arr[i] * (odd_l * odd_r + even_l * even_r)
        return arr_sum
from typing import List

class Solution:
    def duplicateZeros(self, arr: List[int]) -> None:
        """
        Do not return anything, modify arr in-place instead.
        """
        len_arr = len(arr)
        top, i = 0, -1

        while top < len_arr:
            i += 1
            if arr[i] == 0:
                top += 1
            top += 1

        j = len_arr - 1
        if top > len_arr:
            arr[j] = 0
            j -= 1
            i -= 1
        while j >= 0:
            arr[j] = arr[i]
            j -= 1
            if arr[i] == 0:
                arr[j] = 0
                j -= 1
            i -= 1
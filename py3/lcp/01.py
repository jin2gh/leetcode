from typing import List

class Solution:
    def game(self, guess: List[int], answer: List[int]) -> int:
        cnt = 0
        for i in range(3):
            cnt += guess[i] == answer[i]

        return cnt
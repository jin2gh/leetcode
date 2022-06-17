from typing import List

class Solution:
    def maxProfit(self, prices: List[int]) -> int:
        profit, min_price = 0, float('inf')
        for v in prices:
            if v > min_price:
                profit = max(profit, v - min_price)
            else:
                min_price = v

        return profit
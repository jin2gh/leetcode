from typing import List

class Solution:
    def average(self, salary: List[int]) -> float:
        max_num, min_num = max(salary), min(salary)
        return (sum(salary) - max_num - min_num) / (len(salary) - 2)
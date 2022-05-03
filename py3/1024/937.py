from typing import List

class Solution:
    def reorderLogFiles(self, logs: List[str]) -> List[str]:
        def sortChar(char):
            p1, p2 = char.split(' ', 1)
            return (p2, p1)
        ans, nums = [], []
        for s in logs:
            if s[-1].isdigit():
                nums.append(s)
            else:
                ans.append(s)

        ans.sort(key=sortChar)
        ans.extend(nums)
        return ans
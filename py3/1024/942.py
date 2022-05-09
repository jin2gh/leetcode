from typing import List

class Solution:
    def diStringMatch(self, s: str) -> List[int]:
        sm, lg = 0, len(s)
        ans = []
        for ch in s:
            if ch == 'I':
                ans.append(sm)
                sm += 1
            else:
                ans.append(lg)
                lg -= 1
        ans.append(sm)
        return ans

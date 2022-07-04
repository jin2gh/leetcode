from typing import List

class Solution:
    def validateStackSequences(self, pushed: List[int], popped: List[int]) -> bool:
        stack = []
        i, n = 0, len(pushed)
        for v in pushed:
            stack.append(v)
            while stack and i < n and stack[-1] == popped[i]:
                stack.pop()
                i += 1

        return not stack
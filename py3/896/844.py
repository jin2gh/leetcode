class Solution:
    def backspaceCompare(self, s: str, t: str) -> bool:
        stack_s = []
        stack_t = []
        for ch in s:
            if ch == '#':
                if stack_s:
                    stack_s.pop()
            else:
                stack_s.append(ch)
        for ch in t:
            if ch == '#':
                if stack_t:
                    stack_t.pop()
            else:
                stack_t.append(ch)

        return stack_s == stack_t
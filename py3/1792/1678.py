class Solution:
    def interpret(self, command: str) -> str:
        ans, i = '', 0
        while i < len(command):
            if command[i:i + 2] == '()':
                ans += 'o'
                i += 2
            elif command[i:i + 4] == '(al)':
                ans += 'al'
                i += 4
            else:
                ans += command[i]
                i += 1
        return ans
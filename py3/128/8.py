INT_MAX = (1 << 31) - 1
INT_MIN = -1 << 31

class Automaton:
    def __init__(self):
        self.STATE_TABLE = {
            #         space     sign      int      other
            'start': ['start', 'sign', 'int', 'end'],
            'sign': ['end', 'end', 'int', 'end'],
            'in t': ['end', 'end', 'int', 'end'],
            'end': ['end', 'end', 'end', 'end']
        }
        self.state = 'start'
        self.sign = 1
        self.ans = 0

    def get_char_col(self, ch):
        if ch == ' ': return 0
        if ch == '+' or ch == '-': return 1
        if ch.isdigit(): return 2
        return 3

    def transfer(self, ch):
        self.state = self.STATE_TABLE[self.state][self.get_char_col(ch)]
        if self.state == 'int':
            self.ans = self.ans * 10 + int(ch)
            self.ans = min(self.ans, INT_MAX) if self.sign > 0 else min(self.ans, -INT_MIN)
        elif self.state == 'sign' and ch == '-':
            self.sign = -1

    def get(self, s: str) -> int:
        for ch in s:
            self.transfer(ch)

        return self.sign * self.ans

class Solution:
    def myAtoi(self, s: str) -> int:
        automaton = Automaton()
        return automaton.get(s)

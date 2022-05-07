from collections import deque
from typing import List

class Solution:
    def minMutation(self, start: str, end: str, bank: List[str]) -> int:
        if start == end:
            return 0
        ht = set(bank)
        if end not in ht:
            return -1
        dq = deque([(start, 0)])
        while dq:
            cur, cnt = dq.popleft()
            for i, v in enumerate(cur):
                for ch in 'ACGT':
                    if ch != v:
                        nxt = cur[:i] + ch + cur[i + 1:]
                        if nxt in bank:
                            if nxt == end:
                                return cnt + 1
                            bank.remove(nxt)
                            dq.append((nxt, cnt + 1))

        return -1
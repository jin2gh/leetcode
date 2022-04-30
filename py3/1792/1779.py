from typing import List

class Solution:
    def nearestValidPoint(self, x: int, y: int, points: List[List[int]]) -> int:
        idx, distance = -1, float('inf')
        for i,p in enumerate(points):
            if p[0] == x or p[1] == y:
                cur = abs(p[0] - x) + abs(p[1] - y)
                if cur < distance:
                    idx, distance = i, cur
        return idx
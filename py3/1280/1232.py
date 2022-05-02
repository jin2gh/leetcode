from typing import List

class Solution:
    def checkStraightLine(self, coordinates: List[List[int]]) -> bool:
        x, y = coordinates[0][0], coordinates[0][1]
        dx = coordinates[1][0] - x
        dy = coordinates[1][1] - y
        for v in coordinates[2:]:
            if (v[1] - y) * dx != (v[0] - x) * dy:
                return False

        return True
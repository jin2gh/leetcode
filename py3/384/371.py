MASK1 = 1 << 32  # 2^32
MASK2 = 1 << 31  # 2^31
MASK3 = MASK2 - 1 # 2^31-1
# python 中的 int 类型是无限长的，因此需要换算成 32 位有符号整数类型

class Solution:
    def getSum(self, a: int, b: int) -> int:
        if not a or not b: return b or a
        a, b = a % MASK1, b % MASK1
        while b:
            carry = ((a & b) << 1) % MASK1
            a = (a ^ b) % MASK1
            b = carry
        if a & MASK2:  # 负数
            return ~((a ^ MASK2) ^ MASK3)
        else:  # 正数
            return a
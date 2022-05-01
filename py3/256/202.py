class Solution:
    def isHappy(self, n: int) -> bool:
        def getNext(num):
            sum_n = 0
            while num > 0:
                n = num % 10
                num //= 10
                sum_n += n * n
            return sum_n
        ht = set()
        while n != 1:
            n = getNext(n)
            if n in ht:
                return False
            ht.add(n)
        return True
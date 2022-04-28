class Solution:
    def subtractProductAndSum(self, n: int) -> int:
        n_sum, n_product = 0, 1
        while n > 0:
            num = n % 10
            n_sum += num
            n_product *= num
            n = n // 10

        return n_product - n_sum
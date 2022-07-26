class Solution:
    def getHint(self, secret: str, guess: str) -> str:
        cnt_10 = 10
        cnts_s, cnts_g = [0] * cnt_10, [0] * cnt_10
        n = len(guess)
        cnt_a, cnt_b = 0, 0
        for i in range(n):
            if secret[i] == guess[i]:
                cnt_a += 1
            else:
                cnts_s[int(secret[i])] += 1
                cnts_g[int(guess[i])] += 1

        for i in range(cnt_10):
            cnt_b += min(cnts_s[i], cnts_g[i])

        return f'{cnt_a}A{cnt_b}B'
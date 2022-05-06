class Solution:
    def isAlienSorted(self, words: List[str], order: str) -> bool:
        ht = {}
        for i, ch in enumerate(order):
            ht[ch] = i

        for i in range(len(words) - 1):
            w1, w2 = words[i], words[i + 1]
            l1, l2 = len(w1), len(w2)
            for j in range(l1):
                if j >= l2 or ht[w1[j]] > ht[w2[j]]:
                    return False
                if ht[w1[j]] < ht[w2[j]]:
                    break

        return True

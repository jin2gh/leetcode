class Solution:
    def reverseWords(self, s: str) -> str:
        lists = []
        itm = ''
        for c in s:
            if c == ' ':
                if itm: lists.append(itm)
                itm = ''
            else:
                itm += c
        if itm: lists.append(itm)
        lists.reverse()

        return ' '.join(lists)
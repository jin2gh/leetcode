from typing import List

class Solution:
  def maximumWealth(self, accounts: List[List[int]]) -> int:
    cnt = 0
    for account in accounts:
      cnt = max(sum(account), cnt)

    return cnt
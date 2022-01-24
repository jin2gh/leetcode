import { ListNode } from '../class'

// 哈希表
function isPalindrome(head: ListNode | null): boolean {
  let vals = [], cur = head
  while (cur) {
    vals.push(cur.val)
    cur = cur.next
  }

  const len = vals.length, r = len >> 1
  for (let i = 0; i < r; i++) {
    if (vals[i] !== vals[len - i - 1]) return false
  }
  return true
};
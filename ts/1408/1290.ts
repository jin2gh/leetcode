import { ListNode } from '../class'

// 模拟
function getDecimalValue(head: ListNode | null): number {
  let res = 0, cur = head
  while (cur) {
    res <<= 1
    res |= cur.val
    cur = cur.next
  }
  return res
};
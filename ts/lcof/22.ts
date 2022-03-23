import { ListNode } from '../class'

function getKthFromEnd(head: ListNode | null, k: number): ListNode | null {
  let fast = head, slow = head, i = 0
  while (i < k) {
    fast = fast.next
    i += 1
  }
  while (fast) {
    fast = fast.next
    slow = slow.next
  }
  return slow
};
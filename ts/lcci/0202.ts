import { ListNode } from '../class'

// 双指针
function kthToLast(head: ListNode | null, k: number): number {
  const dummy = new ListNode(-1, head)
  let front = head, back = dummy, count = 1
  while(count < k) {
    front = front.next
    count += 1
  }
  while(front) {
    front = front.next
    back = back.next
  }
  return back.val
};
import { ListNode } from "../class"

// 双指针
const removeNthFromEnd = function(head, n) {
  const dummy = new ListNode(-1, head)
  let front = head
  let back = dummy
  for (let i = 0; i < n; i++) {
    front = front.next
  }
  while (front) {
    back = back.next
    front = front.next
  }
  back.next = back.next.next
  return dummy.next
};
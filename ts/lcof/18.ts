import { ListNode } from '../class'

function deleteNode(head: ListNode | null, val: number): ListNode | null {
  const dummy = new ListNode(-1, head)
  let ptr = dummy
  while (ptr && ptr.next) {
    if (ptr.next.val === val) {
      ptr.next = ptr.next.next
      break
    }
    ptr = ptr.next
  }
  return dummy.next
};
import { ListNode } from '../class'

// 哈希表
function partition(head: ListNode | null, x: number): ListNode | null {
  const dummy1 = new ListNode(-1)
  const dummy2 = new ListNode(-1)
  let node1 = dummy1, node2 = dummy2, cur = head
  while(cur) {
    if (cur.val < x) {
      node1.next = cur
      node1 = node1.next
    } else {
      node2.next = cur
      node2 = node2.next
    }
    cur = cur.next
  }
  node2.next = null
  node1.next = dummy2.next
  return dummy1.next
};
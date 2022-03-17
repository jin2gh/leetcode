import { ListNode } from '../class'

// 迭代
export function mergeTwoLists(list1: ListNode | null, list2: ListNode | null): ListNode | null {
  const dummy = new ListNode(-1)
  let cur = dummy
  while (list1 || list2) {
    if (!list1) {
      cur.next = list2
      break
    }
    if (!list2) {
      cur.next = list1
      break
    }
    if (list1.val < list2.val) {
      cur.next = list1
      list1 = list1.next
    } else {
      cur.next = list2
      list2 = list2.next
    }
    cur = cur.next
  }
  return dummy.next
};
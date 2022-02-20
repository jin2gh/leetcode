import { ListNode } from '../class'
import { reverseList } from '../256/206'
import { middleNode } from '../896/876'

/**
 Do not return anything, modify head in-place instead.
 */

// 将链表的后半部分反转再合并
function reorderList(head: ListNode | null): void {
  const mid = middleNode(head)
  let newLL = mid.next
  mid.next = null
  const right = reverseList(newLL)
  let l1 = head, l2 = right
  while (l1 && l2) {
    const tmp1 = l1.next
    const tmp2 = l2.next

    l1.next = l2
    l1 = tmp1

    l2.next = l1
    l2 = tmp2
  }
};

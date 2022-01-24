import { ListNode } from '../class'

// 哈希表
function hasCycle(head: ListNode | null): boolean {
  const ht = new Set()
  while (head) {
    if (ht.has(head)) return true
    ht.add(head)
    head = head.next
  }

  return false
};

// 双指针
function hasCycle1(head: ListNode | null): boolean {
  let fast = head, slow = head
  while (fast) {
    if (!fast.next) return false
    fast = fast.next.next
    slow = slow ? slow.next : null
    if (slow === fast) return true
  }
  return false
};
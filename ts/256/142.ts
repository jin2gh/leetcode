import { ListNode } from '../class'

// 哈希表
function detectCycle(head: ListNode | null): ListNode | null {
  const ht = new Set()
  while (head) {
    if (ht.has(head)) return head
    ht.add(head)
    head = head.next
  }

  return null
};

// 双指针
function detectCycle1(head: ListNode | null): ListNode | null {
  let fast = head, slow = head
  while (fast) {
    if (!fast.next) return null
    fast = fast.next.next
    slow = slow ? slow.next : null
    if (fast === slow) {
      let cur = head
      while (cur !== slow) {
        cur = cur ? cur.next : null
        slow = slow ? slow?.next : null
      }
      return cur
    }
  }
  return null
};

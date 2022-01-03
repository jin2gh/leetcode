/**
 * 哈希表
 * @param {ListNode} head
 * @return {ListNode}
 */
const detectCycle = function(head) {
  const ht = new Set()
  while (head) {
    if (ht.has(head)) return head
    ht.add(head)
    head = head.next
  }

  return null
}

/**
 * 双指针
 * @param {ListNode} head
 * @return {ListNode}
 */
const detectCycle1 = function(head) {
  let fast = head, slow = head
  while (fast) {
    if (!fast.next) return null
    fast = fast.next.next
    slow = slow.next
    if (slow === fast) {
      let cur = head
      while (cur !== slow) {
        cur = cur.next
        slow = slow.next
      }
      return cur
    }
  }
  return null
}

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *   this.val = val;
 *   this.next = null;
 * }
 */

/**
 * 哈希表
 * @param {ListNode} head
 * @return {boolean}
 */
const hasCycle = function(head) {
  const ht = new Set()
  while (head) {
    if (ht.has(head)) return true
    ht.add(head)
    head = head.next
  }

  return false
}

/**
 * 双指针
 * @param {ListNode} head
 * @return {boolean}
 */
const hasCycle1 = function(head) {
  let fast = head, slow = head
  while (fast) {
    if (!fast.next) return false
    fast = fast.next.next
    slow = slow.next
    if (slow === fast) return true
  }
  return false
}
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
};
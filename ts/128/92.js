/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} left
 * @param {number} right
 * @return {ListNode}
 */
var reverseBetween = function(head, left, right) {
  let i = 0
  let vh = new ListNode(-1)
  vh.next = head
  let cur, pre = vh
  while (i < left - 1) {
    pre = pre.next
    i += 1
  }
  cur = pre.next
  while (i < right - 1) {
    const next = cur.next
    cur.next = next.next
    next.next = pre.next
    pre.next = next
    i += 1
  }
  return vh.next
}
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *   this.val = (val===undefined ? 0 : val)
 *   this.next = (next===undefined ? null : next)
 * }
 */

/**
 * 递归
 * @param {ListNode} head
 * @return {ListNode}
 */
const swapPairs = function(head) {
  if (!head || !head.next) return head
  let newHead = head.next
  head.next = swapPairs(newHead.next)
  newHead.next = head
  return newHead
}
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *   this.val = (val===undefined ? 0 : val)
 *   this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
const removeNthFromEnd = function(head, n) {
  const dummy = new ListNode(-1, head)
  let front = head
  let back = dummy
  for (let i = 0; i < n; i++) {
    front = front.next
  }
  while (front) {
    back = back.next
    front = front.next
  }
  back.next = back.next.next
  return dummy.next
};
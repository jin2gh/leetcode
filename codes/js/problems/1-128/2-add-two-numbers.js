/**
 * Definition for singly-linked list.
 */
function ListNode(val, next) {
  this.val = (val === undefined ? 0 : val)
  this.next = (next === undefined ? null : next)
}

/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
  let tail = new ListNode(0)
  let head = tail
  let carry = 0
  while (l1 || l2 || carry) {
    let n1 = l1 ? l1.val : 0
    let n2 = l2 ? l2.val : 0
    let val = n1 + n2 + carry
    carry = val > 9 ? 1 : 0
    tail.next = new ListNode(val % 10)
    tail = tail.next
    l1 = l1 ? l1.next : null
    l2 = l2 ? l2.next : null
  }

  return head.next
};
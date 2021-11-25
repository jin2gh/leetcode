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
const addTwoNumbers = function(l1, l2) {
  let head, tail, plus1 = false
  while (l1 || l2) {
    let n1 = l1 ? l1.val : 0
    let n2 = l2 ? l2.val : 0
    let val = n1 + n2
    if (plus1) {
      val += 1
    }
    plus1 = val > 9
    if (!head) {
      tail = new ListNode()
      tail.val = val % 10
      head = tail
    } else {
      tail.next = new ListNode()
      tail = tail.next
      tail.val = val % 10
    }
    l1 = l1 ? l1.next : null
    l2 = l2 ? l2.next : null
  }

  if (plus1) {
    let last = new ListNode()
    last.val = 1
    tail.next = last
  }
  return head
};
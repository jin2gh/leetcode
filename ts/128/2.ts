// 模拟
function addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode | null {
  let carry = 0
  let head = new ListNode(-1)
  let cur = head
  const MOD = 10
  while (l1 || l2 || carry) {
    const v1 = l1 ? l1.val : 0
    const v2 = l2 ? l2.val : 0
    const val = v1 + v2 + carry
    const node = new ListNode(val % MOD)
    cur.next = node
    cur = cur.next
    l1 = l1 ? l1.next : null
    l2 = l2 ? l2.next : null
    carry = val >= MOD ? 1 : 0
  }
  return head.next
};
/**
 * Definition for singly-linked list.
 */
class ListNode {
  val: number
  next: ListNode | null
  constructor(val?: number, next?: ListNode | null) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
  }
}

type LNode = ListNode | null

// 模拟
function reverseKGroup(head: ListNode | null, k: number): ListNode {
  let dummy: ListNode = new ListNode(1, head)
  let count: number = 0
  let p: LNode = dummy, h: LNode = head, t: LNode = dummy
  while(t) {
    if (count === k) {
      const next: LNode = t.next
      ;[h, t] = reverseList(h, t)
      p.next = h
      t.next = next
      h = next
      p = t
      count = 0
    } else {
      t = t.next
      count += 1
    }
  }
  return dummy.next
}

function reverseList(head: ListNode, tail: ListNode | null): [LNode, LNode] {
  let prev: LNode = tail.next
  let cur: LNode = head
  while (prev !== tail) {
    const next: LNode = cur.next
    cur.next = prev
    prev = cur
    cur = next
  }
  return [tail, head]
}
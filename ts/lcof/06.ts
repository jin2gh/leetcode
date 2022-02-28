import { ListNode } from '../class'

function reversePrint(head: ListNode | null): number[] {
  const stack: number[] = [], ans: number[] = []
  let cur = head
  while (cur) {
    stack.push(cur.val)
    cur = cur.next
  }
  while(stack.length) {
    ans.push(stack.pop())
  }

  return ans
};
import { ListNode } from '../class'

class Solution {
  vals: number[]
  constructor(head: ListNode | null) {
    this.vals = []
    let cur = head
    while(cur) {
      this.vals.push(cur.val)
      cur = cur.next
    }
  }

  getRandom(): number {
    const idx = Math.floor(Math.random() * this.vals.length)
    return this.vals[idx]
  }
}

/**
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(head)
 * var param_1 = obj.getRandom()
 */
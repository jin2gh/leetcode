// 单链表
class MyLinkedList {
  dummy: SinglyNode | null
  length: number = 0
  constructor() {
    this.dummy = new SinglyNode(-1)
  }

  get(index: number): number {
    if (index >= this.length) return -1
    let i = -1, cur = this.dummy
    while (cur && i < index) {
      cur = cur.next
      i += 1
    }
    return cur ? cur.val : -1
  }

  addAtHead(val: number): void {
    const next = this.dummy.next
    const head = new SinglyNode(val, next)
    this.dummy.next = head
    this.length += 1
  }

  addAtTail(val: number): void {
    const node = new SinglyNode(val)
    let cur = this.dummy
    while (cur && cur.next) {
      cur = cur.next
    }
    cur.next = node
    this.length += 1
  }

  addAtIndex(index: number, val: number): void {
    if (index <= this.length) {
      if (index < 0) this.addAtHead(val)
      else if (index === this.length) this.addAtTail(val)
      else {
        const node = new SinglyNode(val)
        let i = -1, cur = this.dummy
        while (i < index - 1) {
          cur = cur.next
          i += 1
        }
        const next = cur.next
        node.next = next
        cur.next = node
        this.length += 1
      }
    }
  }

  deleteAtIndex(index: number): void {
    if (index < this.length && index >= 0) {
      let i = -1, cur = this.dummy
      while (i < index - 1) {
        cur = cur.next
        i += 1
      }
      const next = cur.next ? cur.next.next : null
      cur.next = next
      this.length -= 1
    }
  }

  log() {
  //   console.log(this.dummy)
  }
}

class SinglyNode {
  val: number
  next: SinglyNode | null
  constructor(val?: number, next?: SinglyNode | null) {
    this.val = val || 0
    this.next = next === undefined ? null : next
  }
}
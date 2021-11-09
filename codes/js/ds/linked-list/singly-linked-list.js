class SinglyLinkedList {
  constructor() {
    this.head = new Node() //
    this.size = 0
  }

  get length() {
    return this.size
  }

  find(elem) {
    let p = this.head
    while (p && p.dataItem !== elem) {
      p = p.next
    }
    return p
  }

  findKth(index) {
    let p = this.head
    let i = 0
    while (p && i < index) {
      p = p.next
      i += 1
    }
    if (i === index) return p
    return null
  }

  delete (index) {
    const prev = this.findKth(index - 1)
    const current = this.findKth(index)
    if (current) {
      prev.next = current.next
    }
  }

  insert(index, item) {
    const prev = this.findKth(index - 1)
    if (prev) {
      if (prev.next) {
        const newNode = new Node(item)
        newNode.next = prev.next
        prev.next = newNode
      } else {
        prev.next = new Node(item)
      }
      this.size += 1
    } else {
      throw Error('不存在直接前驱结点')
    }
  }
}

class Node {
  constructor(data) {
    this.dataItem = data
    this.next = null
  }
}

const sll = new SinglyLinkedList()
sll.insert(1, { name: 1 })
sll.insert(2, { name: 'after 1' })
sll.insert(1, { name: 2 })
sll.insert(2, { name: 3 })
console.log(sll.findKth(4))

module.exports = {
  SinglyLinkedList,
}

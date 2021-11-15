class SinglyLL {
  constructor() {
    this.head = new Node()
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

  delete(index) {
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
      throw Error('Immediate predecessor element does not exsit')
    }
  }
}

class Node {
  constructor(data) {
    this.dataItem = data
    this.next = null
  }
}


module.exports = {
  SinglyLL,
}

class List {
  constructor() {
    this.dataItems = []
    this.pos = 0
    this.size = 0
  }

  get length () {
    return this.size
  }

  append(element) {
    this.dataItems[this.size++] = element
  }

  insert(after, element) {
    if (after > -1 && after < this.size) {
      for (let i = this.size; i > after; i--) {
        if (i === after + 1) {
          this.dataItems[i] = element
        } else {
          this.dataItems[i] = this.dataItems[i - 1]
        }
      }
      this.size += 1
      return true
    }
    return false
  }

  remove(element) {
    const idx = this.find(element)
    if (idx > -1) {
      for (let i = idx; i < this.size - 1; i++) {
        this.dataItems[idx] = this.dataItems[idx + 1]
      }
      this.dataItems.pop()
      this.size -= 1
      return true
    }
    return false
  }

  find(element) {
    for (let i = 0; i < this.size; i++) {
      if (this.dataItems[i] === element) {
        return i
      }
    }
    return -1
  }

  clear() {
    delete this.dataItems
    this.dataItems = []
    this.size = 0
    this.pos = 0
  }

  front() {
    this.pos = 0
  }

  end() {
    this.pos = this.size - 1
  }

  prev() {
    if (this.pos > 0) {
      this.pos -= 1
    }
  }

  next() {
    if (this.pos < this.size) {
      this.pos += 1
    }
  }

  moveTo(position) {
    // 一般需要判断 position 的类型，数值
    if (position < this.size && position > -1) {
      this.pos = position
    }
  }

  curPos() {
    return this.pos
  }

  getElement() {
    return this.dataItems[this.pos]
  }
}

const list = new List()
list.append('hhh')
console.log(list.curPos(), list.getElement())
list.append('iii')
list.insert(0, 'jjjj')
list.end()
console.log(list.length, list.curPos(), list.getElement())
list.prev()
console.log(list.length, list.curPos(), list.getElement())
list.remove('iii')
console.log(list.length)
class SeqString {
  constructor(str) {
    this.items = str // 这里可以用 array
  }

  index(str) { // 简单的模式匹配
    const l = this.items.length
    const s = this.items
    let i = 0, j = 0
    while (i < l && j < str.length) {
      if (s[i] === str[j]) {
        i += 1
        j += 1
      } else {
        i = i - j + 1
        j = 0
      }
    }

    if (j === str.length) return i - j
    return -1
  }
}

const s1 = new SeqString('123456')
console.log(s1.index('654'));

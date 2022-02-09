class MyHashMap {
  base = 1001
  ht = new Array(this.base).fill(0).map(() => new Array())

  put(key: number, value: number): void {
    const hashKey = this.hash(key)

    for (const v of this.ht[hashKey]) {
      if (v[0] === key) {
        v[1] = value
        return
      }
    }
    this.ht[hashKey].push([key, value])
  }

  get(key: number): number {
    const hashKey = this.hash(key)
    for (const v of this.ht[hashKey]) {
      if (v[0] === key) return v[1]
    }
    return -1
  }

  remove(key: number): void {
    const hashKey = this.hash(key)
    const arr = this.ht[hashKey]
    for (const v of arr) {
      if (v[0] === key) {
        const idx = arr.indexOf(v)
        arr.splice(idx, 1)
        return
      }
    }
  }

  hash(key: number): number {
    return key % this.base
  }
}

/**
* Your MyHashMap object will be instantiated and called as such:
* var obj = new MyHashMap()
* obj.put(key,value)
* var param_2 = obj.get(key)
* obj.remove(key)
*/
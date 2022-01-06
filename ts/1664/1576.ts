function modifyString(s: string): string {
  const strs: string[] = ['a', 'b', 'c']
  const arr: string[] = [...s]
  const maxIdx: number = arr.length - 1
  for (let i = 0; i <= maxIdx; i++) {
    if (arr[i] === '?') {
      for (const v of strs) {
        if ((i && arr[i - 1] === v) || (i < maxIdx && arr[i + 1] === v)) {
          continue
        }
        arr[i] = v
        break
      }
    }
  }
  return arr.join('')
}
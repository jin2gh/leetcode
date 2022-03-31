function selfDividingNumbers(left: number, right: number): number[] {
  const ans: number[] = []
  for (let i = left; i <= right; i++) {
    const s = String(i)
    let flag = true
    for (const c of s) {
      if (c === '0' || i % (+c)) {
        flag = false
        break
      }
    }
    if (flag) ans.push(i)
  }
  return ans
};
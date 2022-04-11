function largeGroupPositions(s: string): number[][] {
  const len = s.length, res: number[][] = []
  let st = 0
  for (let i = 0; i < len; ++i) {
    if (s[st] !== s[i + 1]) {
      if (i - st > 1) { // i - st + 1 >= 3
        res.push([st, i])
      }
      st = i + 1
    }
  }
  return res
};
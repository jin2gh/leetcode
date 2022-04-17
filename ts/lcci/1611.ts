function divingBoard(shorter: number, longer: number, k: number): number[] {
  const ans: number[] = []
  if (shorter === longer) {
    if (k > 0) ans.push(k * longer)
  } else {
    for(let i = 0; i <= k; ++i) {
      let j = k - i
      let cur = i * longer + j * shorter
      if (cur) ans.push(cur)
    }
  }
  return ans
};
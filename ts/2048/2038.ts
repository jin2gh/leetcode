function winnerOfGame(colors: string): boolean {
  const len = colors.length
  if (len < 2) return false
  let cnt_a = 0, cnt_b = 0
  for (let i = 1; i < len - 1; i++) {
    if (colors[i - 1] === colors[i] && colors[i] === colors[i + 1]) {
      if (colors[i] === 'A') cnt_a += 1
      else cnt_b += 1
    }
  }
  if (cnt_a <= cnt_b) return false
  return true
};
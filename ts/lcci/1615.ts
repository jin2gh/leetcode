function masterMind(solution: string, guess: string): number[] {
  const n = 4, ht = {}
  let right = 0, cnt = 0
  for (const v of guess) {
    if (ht[v]) ht[v] += 1
    else ht[v] = 1
  }
  for (let i = 0; i < n; ++i) {
    if (solution[i] === guess[i]) right += 1
    if (ht[solution[i]]) {
      ht[solution[i]] -= 1
      cnt += 1
    }
  }
  return [right, cnt - right]
};
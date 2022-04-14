function numTeams(rating: number[]): number {
  const n = rating.length
  let cnt = 0
  for (let j = 1; j < n - 1; ++j) {
    let smallI = 0, bigI = 0, smallK = 0, bigK = 0
    for (let i = 0; i < j; ++i) {
      if (rating[i] < rating[j]) smallI += 1
      else if (rating[i] > rating[j]) bigI += 1
    }
    for (let k = j + 1; k < n; ++k) {
      if (rating[k] < rating[j]) smallK += 1
      else if (rating[k] > rating[j]) bigK += 1
    }
    cnt += (smallI * bigK + bigI * smallK)
  }
  return cnt
};
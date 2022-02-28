function kClosest(points: number[][], k: number): number[][] {
  const ht = {}, dists: number[] = [], ans: number[][] = []
  for (const p of points) {
    let d2 = p[0] * p[0] + p[1] * p[1]
    dists.push(d2)
    if (ht[d2]) {
      ht[d2].push(p)
    } else {
      ht[d2] = [p]
    }
  }
  dists.sort((a, b) => a - b)
  let i = 0
  while (i < k) {
    const pos = ht[dists[i]]
    for (let j = 0; j < pos.length; j++) {
      ans.push(pos[j])
      i += 1
    }
  }
  return ans
};

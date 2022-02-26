function findSmallestSetOfVertices(n: number, edges: number[][]): number[] {
  const counts: number[] = new Array(n).fill(0)
  const ans: number[] = []
  for (const v of edges) {
    counts[v[1]] += 1
  }
  for (let i = 0; i < n; i++) {
    if (!counts[i]) ans.push(i)
  }

  return ans
};
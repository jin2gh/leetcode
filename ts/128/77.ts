function combine(n: number, k: number): number[][] {
  const ans: number[][] = []

  const dfs = (cur: number, n: number, k: number, temp: number[]): void => {
    // 剪枝：temp 长度加上区间 [cur, n] 的长度小于 k，不可能构造出长度为 k 的 temp
    if (temp.length + (n - cur + 1) < k) return

    // 长度为 k 的 temp 已经构造完毕，将其加入答案 ans
    if (temp.length === k) {
      ans.push(temp)
      return
    }

    dfs(cur + 1, n, k, [...temp, cur]) // 选择当前位置
    dfs(cur + 1, n, k, temp) // 不选择当前位置
  }
  dfs(1, n, k, [])
  return ans
};
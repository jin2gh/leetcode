// 回溯
function maximumRequests(n: number, requests: number[][]): number {
  const cnts = new Array(n).fill(0), len = requests.length
  let ans = 0,
      cnt = 0,
      zero_cnt = n // 避免多次遍历 cnts 数组
  const dfs = (pos: number): void => {
    if (pos === len) {
      if (zero_cnt === n) ans = Math.max(ans, cnt)
      return
    }
    dfs(pos + 1) // 不选择当前请求

    // 选择当前请求
    let zero_tmp = zero_cnt
    const f = requests[pos][0], t = requests[pos][1]
    cnt += 1

    zero_cnt -= cnts[f] === 0 ? 1 : 0
    zero_cnt -= cnts[t] === 0 ? 1 : 0
    cnts[f] -= 1
    cnts[t] += 1
    zero_cnt += cnts[f] === 0 ? 1 : 0
    zero_cnt += cnts[t] === 0 ? 1 : 0
    dfs(pos + 1)

    // 状态回退
    zero_cnt = zero_tmp
    cnts[f] += 1
    cnts[t] -= 1
    cnt -= 1
  }
  dfs(0)
  return ans
};
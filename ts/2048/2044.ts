// 回溯
function countMaxOrSubsets(nums: number[]): number {
  const len = nums.length
  let ans = 0, max = 0
  const dfs = (pos: number, orVal: number): void => {
    if (pos === len) {
      if (orVal > max) {
        max = orVal
        ans = 1
      } else if (orVal === max) {
        ans += 1
      }
      return
    }
    dfs(pos + 1, orVal | nums[pos])
    dfs(pos + 1, orVal)
  }
  dfs(0, 0)
  return ans
};

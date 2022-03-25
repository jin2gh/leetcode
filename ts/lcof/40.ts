// 排序
function getLeastNumbers(arr: number[], k: number): number[] {
  arr.sort((a, b) => a - b)
  const ans = []
  for (let i = 0; i < k; i++) {
    ans.push(arr[i])
  }
  return ans
};
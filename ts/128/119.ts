// 二项式定理求解
function getRow(rowIndex: number): number[] {
  const ans: number[] = [1]
  const n = rowIndex + 1
  for (let i = 1; i < n; i++) {
    ans.push(ans[i - 1] * (n - i) / i)
  }
  return ans
};
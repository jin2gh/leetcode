function sumEvenAfterQueries(nums: number[], queries: number[][]): number[] {
  const ans: number[] = []
  let sum = 0
  for (const v of nums) {
    if (v % 2 === 0) sum += v
  }

  for (const q of queries) {
    if (nums[q[1]] % 2) {
      if (q[0] % 2) sum += (q[0] + nums[q[1]])
    } else {
      if (q[0] % 2) sum -= nums[q[1]]
      else sum += q[0]
    }
    nums[q[1]] += q[0]
    ans.push(sum)
  }

  return ans
};
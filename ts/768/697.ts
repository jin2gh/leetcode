type tuple3 = [number, number, number]

function findShortestSubArray(nums: number[]): number {
  const len = nums.length
  const map = new Map<number, tuple3>()
  let degree: tuple3 = [1, 0, 0]
  for(let i = 0; i < len; ++i) {
    let cur = map.get(nums[i])
    if (cur) {
      cur[0] += 1
      cur[2] = i
      if (cur[0] > degree[0]) degree = cur
      else if (cur[0] === degree[0]) {
        degree = (cur[2] - cur[1]) >= (degree[2] - degree[1]) ? degree : cur
      }
    }
    else map.set(nums[i], [1, i, i])
  }
  return degree[2] - degree[1] + 1
};
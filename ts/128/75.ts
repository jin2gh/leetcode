// 双指针
function sortColors(nums: number[]): void {
  let p0 = 0, p1 = 0
  const swap = (a, b) => {
    let tmp = nums[a]
    nums[a] = nums[b]
    nums[b] = tmp
  }
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 0) {
      swap(i, p0)
      if (p0 < p1) swap(i, p1)
      p0 += 1
      p1 += 1
    } else if (nums[i] === 1) {
      swap(i, p1)
      p1 += 1
    }
  }
};
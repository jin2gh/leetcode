// 哈希表
function findRepeatNumber(nums: number[]): number {
  const ht = {}
  for (const n of nums) {
    if (ht[n]) return n
    ht[n] = 1
  }
  return -1
};

// 原地哈希
function findRepeatNumber1(nums: number[]): number {
  let i = 0
  while (i < nums.length) {
    if (nums[i] !== i) {
      if(nums[nums[i]] === nums[i]) return nums[i]
      const tmp = nums[i]
      nums[i] = nums[tmp]
      nums[tmp] = tmp
    } else {
      i += 1
    }
  }
  return -1
};
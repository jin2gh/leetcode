int firstMissingPositive(int* nums, int numsSize){
  for (int i = 0; i < numsSize; i++) {
    while(nums[i] > 0 && nums[i] <= numsSize && nums[nums[i] - 1] != nums[i]) {
      int tmp = nums[i];
      nums[i] = nums[tmp - 1];
      nums[tmp - 1] = tmp;
    }
  }

  for (int i = 0; i < numsSize; i++) {
    // 不写成 nums[j] - 1 != j 是因为 nums[j] - 1 可能超过 int 类型的范围
    if (nums[i] != i + 1) return i + 1;
  }
  return numsSize + 1;
}
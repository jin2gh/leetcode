int dominantIndex(int* nums, int numsSize){
  if (numsSize == 1) return 0;
  int maxIdx = 0, max = nums[0], second = 0;
  for (int i = 1; i < numsSize; i++) {
    if (nums[i] > max) {
      second = max;
      max = nums[i];
      maxIdx = i;
    } else if (nums[i] > second) {
      second = nums[i];
    }
  }
  return max >= (second * 2) ? maxIdx : -1;
}
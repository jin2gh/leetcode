int maximumDifference(int* nums, int numsSize){
  int min = nums[0], ans = -1;
  for (int i = 1; i < numsSize; i++) {
    int diff = nums[i] - min;
    if (diff > 0) {
      ans = diff > ans ? diff : ans;
    } else {
      min = nums[i];
    }
  }
  return ans;
}
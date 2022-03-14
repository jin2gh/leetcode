int findMin(int* nums, int numsSize){
  int l = 0, r = numsSize - 1, m;
  if (nums[l] < nums[r]) return nums[l];
  while(l < r) {
    m = l + (r - l) / 2;
    if (nums[m] < nums[r]) r = m;
    else if (nums[m] > nums[r]) l = m + 1;
    else r -= 1;
  }

  return nums[l];
}
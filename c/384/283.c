void moveZeroes(int* nums, int numsSize){
  int l = 0, r = 0;
  while(r < numsSize) {
    if (nums[r] != 0) {
      if (nums[l] == 0) {
        int tmp = nums[r];
        nums[r] = nums[l];
        nums[l] = tmp;
      }
      l += 1;
    }
    r += 1;
  }
}
#include <math.h>

int maxSubArray(int* nums, int numsSize){
  int pre = nums[0], max = pre;
  for (int i = 1; i < numsSize; i++) {
    pre = fmax(pre + nums[i], nums[i]);
    max = fmax(max, pre);
  }

  return max;
}
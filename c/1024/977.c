#include <stdlib.h>

/**
 * Note: The returned array must be malloced, assume caller calls free().
 */
int* sortedSquares(int* nums, int numsSize, int* returnSize){
  int l = 0, r = numsSize - 1, idx = r;
  int* ans = malloc(sizeof(int) * numsSize);
  *returnSize = numsSize;

  while (l <= r) {
    int x = nums[l] * nums[l], y = nums[r] * nums[r];
    if (x >= y) {
      ans[idx--] = x;
      l += 1;
    } else {
      ans[idx--] = y;
      r -= 1;
    }
  }

  return ans;
}
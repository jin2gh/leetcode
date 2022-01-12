#include <limits.h>
#include <stdbool.h>

// 贪心
bool increasingTriplet(int* nums, int numsSize){
  if (numsSize < 3) return false;
  int first = nums[0], second = INT_MAX;
  for (int i = 0; i < numsSize; i++) {
    if (nums[i] > second) return true;
    if (nums[i] > first) {
      second = nums[i];
    } else {
      first = nums[i];
    }
  }
  return false;
}
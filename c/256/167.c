#include <stdlib.h>

/**
 * Note: The returned array must be malloced, assume caller calls free().
 */
int* twoSum(int* numbers, int numbersSize, int target, int* returnSize){
  int* ans = malloc(sizeof(int) * 2);
  *returnSize = 2;

  int l = 0, r = numbersSize - 1, sum;

  while(l < r) {
    sum = numbers[l] + numbers[r];
    if (sum == target) {
      ans[0] = l + 1;
      ans[1] = r + 1;
      return ans;
    }
    if (sum > target) r--;
    else l++;
  }

  ans[0] = -1, ans[1] = -1;
  return ans;
}
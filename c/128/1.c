#include <stdlib.h>

// 枚举法
int* twoSum(int* nums, int numsSize, int target, int* returnSize){
  for (int i = 0; i < numsSize; i++) {
    int another = target - nums[i];
    for (int j = i + 1; j < numsSize; j++) {
      if (nums[j] == another) {
        int* res = (int*)malloc(sizeof(int) * 2);
        res[0] = i;
        res[1] = j;
        *returnSize = 2;
        return res;
      }
    }
  };
  *returnSize = 0;
  return 0;
}
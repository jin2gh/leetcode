long long subArrayRanges(int* nums, int numsSize){
  int maxi = numsSize - 1;
  long long sum = 0;
  for (int i = 0; i < maxi; i++) {
    int max = nums[i], min = nums[i];
    for (int j = i + 1; j <= maxi; j++) {
      if (nums[j] > max) max = nums[j];
      if (nums[j] < min) min = nums[j];
      sum += (max - min);
    }
  }
  return sum;
}
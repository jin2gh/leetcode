void swap(int* l, int* r) {
  int t = *l;
  *l = *r, *r = t;
}

void reverse(int* nums, int l, int r) {
  while (l < r) {
    swap(&nums[l], &nums[r]);
    l++;
    r--;
  }
}

void rotate(int* nums, int numsSize, int k) {
  k %= numsSize;
  if (k == 0) return;
  reverse(nums, 0, numsSize - 1);
  reverse(nums, 0, k - 1);
  reverse(nums, k, numsSize - 1);
}
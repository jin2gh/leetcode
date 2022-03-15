#include <stdio.h>
#include <uthash.h>

struct hashTable {
  int key;
  UT_hash_handle hh;
};

bool containsDuplicate(int* nums, int numsSize){
  struct hashTable* ht = NULL;
  for (int i = 0; i < numsSize; i++) {
    struct hashTable* ele;
    HASH_FIND_INT(ht, nums + i, ele);
    if (ele != NULL) return true;
    ele = malloc(sizeof(struct hashTable));
    ele->key = nums[i];
    HASH_ADD_INT(ht, key, ele);
  }
  return false;
}
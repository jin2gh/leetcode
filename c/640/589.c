#include <stdio.h>
#include <stdlib.h>

/**
 * Definition for a Node.
 */
struct Node {
  int val;
  int numChildren;
  struct Node** children;
};

void dfs(struct Node* node, int* res, int* pos) {
  if (NULL == node) return;
  res[(*pos)++] = node->val;
  for (int i = 0; i < node->numChildren; ++i) {
    dfs(node->children[i], res, pos);
  }
}

int* preorder(struct Node* root, int* returnSize) {
  int* ans = (int*)malloc(sizeof(int) * 10000); // 10000 题目所给树的结点总数
  int i = 0;
  dfs(root, ans, &i);
  *returnSize = i;
  return ans;
}
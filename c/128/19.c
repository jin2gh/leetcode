#include <stdio.h>
#include <stdlib.h>
#include "../structs.h"

struct ListNode* removeNthFromEnd(struct ListNode* head, int n){
  struct ListNode* dummy = malloc(sizeof(struct ListNode));
  dummy->val = -1, dummy->next = head;
  struct ListNode* fast = head;
  struct ListNode* slow = dummy;
  for (int i = 0; i < n; i++) {
    fast = fast->next;
  }

  while (fast != NULL) {
    fast = fast->next;
    slow = slow->next;
  }

  slow->next = slow->next->next;
  return dummy->next;
}
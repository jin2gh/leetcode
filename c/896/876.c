#include <stdio.h>
#include "../structs.h"

struct ListNode* middleNode(struct ListNode* head){
  struct ListNode* fast = head;
  struct ListNode* slow = head;
  while (fast != NULL && fast->next != NULL) {
    fast = fast->next->next;
    slow = slow->next;
  }
  return slow;
}
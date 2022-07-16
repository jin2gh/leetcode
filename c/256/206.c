#include <stdio.h>
#include "../structs.h"


struct ListNode* reverseList(struct ListNode* head){
  struct ListNode* pre = NULL;
  struct ListNode* cur = head;
  struct ListNode* nxt;
  while (cur) {
    nxt = cur->next;
    cur->next = pre;
    pre = cur;
    cur = nxt;
  }
  return pre;
}
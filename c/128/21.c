#include <stdio.h>
#include <stdlib.h>
#include "../structs.h"


struct ListNode* mergeTwoLists(struct ListNode* list1, struct ListNode* list2){
  struct ListNode* dummy = malloc(sizeof(struct ListNode));
  dummy->next = NULL;
  struct ListNode* ptr = dummy;
  while (list1 && list2) {
    if (list1->val < list2->val) {
      ptr->next = list1;
      list1 = list1->next;
    } else {
      ptr->next = list2;
      list2 = list2->next;
    }
    ptr = ptr->next;
  }
  if (list1 == NULL) ptr->next = list2;
  else ptr->next = list1;
  return dummy->next;
}
#include <string.h>

char * reverseWords(char * s){
  int len = strlen(s);
  int i = 0;

  while (i < len) {
    int start = i;
    while (i < len && s[i] != ' ') i++;

    int l = start, r = i - 1;
    while (l < r) {
      char tmp = s[r];
      s[r--] = s[l];
      s[l++] = tmp;
    }

    while (i < len && s[i] == ' ') i++;
  }

  return s;
}
#include <stdbool.h>

bool isOneBitCharacter(int* bits, int bitsSize){
  int i = 0, idx = bitsSize - 1;
  while(i < idx) {
    if (bits[i] == 1) i++;
    i++;
  }
  return i == idx;
}
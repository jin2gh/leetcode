void reverseString(char* s, int sSize){
  int l = 0, r= sSize - 1, t;
  while (l < r) {
    t = s[r];
    s[r--] = s[l];
    s[l++] = t;
  }
}
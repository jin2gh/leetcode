// 模拟
int numberOfMatches(int n){
  int sum = 0;
  while (n > 1) {
    if (n % 2) {
      sum += (n - 1) / 2;
      n += 1;
    } else {
      sum += n / 2;
    }
    n /= 2;
  }
  return sum;
}

// 数学
int numberOfMatches1(int n){
  return n - 1;
}
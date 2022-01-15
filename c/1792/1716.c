int gs(int, int, int);
int totalMoney(int n) {
  int c = n / 7;
  int d = n % 7;
  int week1 = gs(1, 7, 7);
  int week_c = week1 + 7 * (c - 1);
  int sum = gs(week1, week_c, c);
  if (d != 0) sum += gs(c + 1, c + d, d);
  return sum;
}

int gs(int n1, int n2, int d) {
  return (n1 + n2) * d / 2;
}
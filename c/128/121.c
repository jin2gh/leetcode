#include <limits.h>

int maxProfit(int* prices, int pricesSize){
  int profit = 0, min = INT_MAX;
  for (int i = 0; i < pricesSize; ++i) {
    if (prices[i] > min) {
      int diff = prices[i] - min;
      profit = diff > profit ? diff : profit;
    } else if (prices[i] < min) {
      min = prices[i];
    }
  }
  return profit;
}
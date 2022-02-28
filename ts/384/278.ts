/**
 * The knows API is defined in the parent class Relation.
 * isBadVersion(version: number): boolean {
 *     ...
 * };
 */

var solution = function(isBadVersion: any) {

  return function(n: number): number {
    let l = 1, r = n
    while (l < r) {
      const m = l + ((r - l) >> 1)
      isBadVersion(m) ? r = m : (l = m + 1)
    }
    return l
  };
};
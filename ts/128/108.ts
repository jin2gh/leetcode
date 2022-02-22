import { TreeNode } from '../class'

function sortedArrayToBST(nums: number[]): TreeNode | null {
  const bs = (nums: number[], left: number, right: number): TreeNode | null => {
    if (left > right) return null
    const mid = left + ((right - left) >> 1)
    const root: TreeNode = new TreeNode(nums[mid])
    root.left = bs(nums, left, mid - 1)
    root.right = bs(nums, mid + 1, right)
    return root
  }
  return bs(nums, 0, nums.length - 1)
};
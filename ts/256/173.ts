import { TreeNode } from '../class'
import { iterativeInorderTraversal as inorder } from '../128/94'

class BSTIterator {
  inorder: number[] = []
  ptr: number = -1
  constructor(root: TreeNode | null) {
    this.inorder = inorder(root)
    this.ptr = 0
  }

  next(): number {
    return this.inorder[this.ptr++]
  }

  hasNext(): boolean {
    return this.ptr < this.inorder.length
  }
}

/**
 * Your BSTIterator object will be instantiated and called as such:
 * var obj = new BSTIterator(root)
 * var param_1 = obj.next()
 * var param_2 = obj.hasNext()
 */
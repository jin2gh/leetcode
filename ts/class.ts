/**
 * Definition for singly-linked list.
 */
export class ListNode {
  val: number
  next: ListNode | null
  constructor(val?: number, next?: ListNode | null) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
  }
}

/**
 * Definition for a binary tree node.
 */
export class TreeNode {
  val: number
  left: TreeNode | null
  right: TreeNode | null
  constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
  }
}

/**
 * Definition for Node.
 */
export class Node {
  val: number
  left: Node | null
  right: Node | null
  next: Node | null
  constructor(val?: number, left?: Node, right?: Node, next?: Node) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
    this.next = (next===undefined ? null : next)
  }
}


/**
 * Definition for node. quad-tree-node
 */
export class QuadTreeNode {
  val: boolean
  isLeaf: boolean
  topLeft: QuadTreeNode | null
  topRight: QuadTreeNode | null
  bottomLeft: QuadTreeNode | null
  bottomRight: QuadTreeNode | null
  constructor(val?: boolean, isLeaf?: boolean, topLeft?: QuadTreeNode, topRight?: QuadTreeNode, bottomLeft?: QuadTreeNode, bottomRight?: QuadTreeNode) {
    this.val = (val===undefined ? false : val)
    this.isLeaf = (isLeaf===undefined ? false : isLeaf)
    this.topLeft = (topLeft===undefined ? null : topLeft)
    this.topRight = (topRight===undefined ? null : topRight)
    this.bottomLeft = (bottomLeft===undefined ? null : bottomLeft)
    this.bottomRight = (bottomRight===undefined ? null : bottomRight)
  }
}
/**
 * Definition for a n-ary tree node.
 */
export class NAryTreeNode {
  val: number
  children: NAryTreeNode[]
  constructor(val?: number) {
    this.val = (val===undefined ? 0 : val)
    this.children = []
  }
}
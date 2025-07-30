/**
 * @param {TreeNode | null} a
 * @param {TreeNode | null} b
 * @return {boolean}
 */
export default function binaryTreeEqual(a, b) {
  // Hint: Use recursive approach to compare tree structures and values
  
  // Stop condition 1: if both nodes are null, trees are equal
  if (a === null && b === null) {
    return true;
  }

  // Stop condition 2: if one of the nodes is null, trees are not equal
  if (a === null || b === null) {
    return false;
  }

  // Condition 3: if node values are not equal
  if (a.val !== b.val) {
    return false;
  }

  // Recursive calls to compare left and right subtrees
  return binaryTreeEqual(a.left, b.left) && binaryTreeEqual(a.right, b.right);
}

/**
 * @param {TreeNode | null} a
 * @param {TreeNode | null} b
 * @return {boolean}
 */
export default function binaryTreeEqual(a, b) {
  // Condition d'arrêt 1 : si les deux nœuds sont null, les arbres sont égaux
  if (a === null && b === null) {
    return true;
  }

  // Condition d'arrêt 2 : si l'un des nœuds est null, les arbres ne sont pas égaux
  if (a === null || b === null) {
    return false;
  }

  // Condition 3 : si les valeurs des nœuds ne sont pas égales
  if (a.val !== b.val) {
    return false;
  }

  // Appels récursifs pour comparer les sous-arbres gauche et droit
  return binaryTreeEqual(a.left, b.left) && binaryTreeEqual(a.right, b.right);
}

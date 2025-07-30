/* function selectionSort(arr) {
  let arrLength = arr.length;

  for (let i = 0; i < arrLength; i++) {
    let minIndex = i;
    console.log('i', i);
    console.log('arr[i]', arr[i]);
    for (let j = minIndex; j < arrLength; j++) {
      if (arr[minIndex] > arr[j]) {
        [arr[minIndex], arr[j]] = [arr[j], arr[minIndex]];
        minIndex = j;
      }
    }
  }
  return arr;
} */

// autre facon de faire le swap
function selectionSort(arr) {
  let arrLength = arr.length;

  for (let i = 0; i < arrLength; i++) {
    let minIndex = i;
    console.log('i', i);
    console.log('arr[i]', arr[i]);
    for (let j = i + 1; j < arrLength; j++) {
      if (arr[minIndex] > arr[j]) {
        minIndex = j;
      }

      /*   // Exemple : arr = [5, 2, 8, 1, 4]
      Supposons qu'après la première recherche, i = 0 (valeur 5) et minIndex = 3 (valeur 1)

      let temp = arr[i]; // Étape 1 : Sauvegarder la valeur de arr[i]
       temp = arr[0] = 5

      arr[i] = arr[minIndex]; // Étape 2 : Mettre la valeur de arr[minIndex] à la position i
       arr[0] = arr[3] = 1
       arr est maintenant [1, 2, 8, 1, 4] (le 5 est écrasé, mais on l'a dans 'temp')

      arr[minIndex] = temp; // Étape 3 : Mettre la valeur sauvegardée (de temp) à la position minIndex
       arr[3] = temp = 5
       arr est maintenant [1, 2, 8, 5, 4] */
      if (minIndex != i) {
        let temp = arr[i];
        arr[i] = arr[minIndex];
        arr[minIndex] = temp;
      }
    }
  }
  return arr;
}

console.log(selectionSort([5, 2, 8, 1, 4]));

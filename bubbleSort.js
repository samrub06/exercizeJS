/* 
Le tri à bulles est un algorithme de tri simple qui compare des éléments adjacents et les échange s'ils ne sont pas dans le bon ordre. Il répète ce processus plusieurs fois jusqu'à ce que la liste soit entièrement triée. On l'appelle "tri à bulles" parce que les éléments les plus grands "remontent" progressivement à la fin de la liste, comme des bulles dans l'eau.
 */

// [5, 1, 4, 2, 8]

function bubbleSort(arr) {
  const arrLength = arr.length - 1;
  for (let i = 0; i < arrLength; i++) {
    for (let j = 0; j < arrLength - i; j++) {
      console.log(`arr[j] ${arr[j]} of index ${j}`);

      console.log(`arr[j+1] ${arr[j + 1]} of index ${j + 1}`);
      if (arr[j] > arr[j + 1]) {
        const temp = arr[j + 1];
        arr[j + 1] = arr[j];
        arr[j] = temp;
      }
      console.log(`array ${arr}`);
    }
  }
  return arr;
}

console.log(bubbleSort([5, 1, 4, 2, 8]));

/* 
Solution 

function bubbleSort(arr) {
  const n = arr.length;
  let swapped; // Ce drapeau nous aidera à optimiser l'algorithme

  // La boucle externe contrôle le nombre de passes (jusqu'à n-1 passes)
  for (let i = 0; i < n - 1; i++) {
    swapped = false; // On réinitialise 'swapped' à false pour chaque nouvelle passe

    // La boucle interne parcourt la partie non triée du tableau
    // À chaque passe 'i', les 'i' derniers éléments sont déjà à leur place
    for (let j = 0; j < n - 1 - i; j++) {
      // Compare l'élément courant avec le suivant
      if (arr[j] > arr[j + 1]) {
        // Si l'élément courant est plus grand que le suivant, on les échange
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
        swapped = true; // Indique qu'un échange a eu lieu pendant cette passe
      }
    }

    // Si aucun élément n'a été échangé pendant cette passe,
    // cela signifie que le tableau est déjà trié, et on peut arrêter.
    if (swapped === false) {
      break;
    }
  }
  return arr; // Retourne le tableau trié
}

// --- Exemples d'utilisation ---

let liste1 = [5, 1, 4, 2, 8];
console.log("Liste originale 1:", liste1);
console.log("Liste triée 1:", bubbleSort(liste1)); // Output: [1, 2, 4, 5, 8]

let liste2 = [10, 7, 3, 9, 1, 5];
console.log("Liste originale 2:", liste2);
console.log("Liste triée 2:", bubbleSort(liste2)); // Output: [1, 3, 5, 7, 9, 10]

let liste3 = [1, 2, 3, 4, 5]; // Déjà triée
console.log("Liste originale 3:", liste3);
console.log("Liste triée 3:", bubbleSort(liste3)); // Output: [1, 2, 3, 4, 5] (s'arrêtera rapidement)

let liste4 = []; // Tableau vide
console.log("Liste originale 4:", liste4);
console.log("Liste triée 4:", bubbleSort(liste4)); // Output: []

let liste5 = [7]; // Tableau à un seul élément
console.log("Liste originale 5:", liste5);
console.log("Liste triée 5:", bubbleSort(liste5)); // Output: [7]
*/

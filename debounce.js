let i = 0;
function increment() {
  i++;
}

/**
 * @param {Function} func
 * @param {number} wait
 * @return {Function}
 */

//un debounce retarde l’exécution et annule les appels précédents si un nouveau arrive avant la fin du délai

const debounce = (callback, delay) => {
  let timeoutId;

  // On retourne une fonction qui peut être appelée plusieurs fois
  return function (...args) {
    // Si on appelle la fonction à nouveau avant le délai, on annule le précédent
    clearTimeout(timeoutId);

    // On relance un nouveau délai
    timeoutId = setTimeout(() => {
      callback.apply(this, args);
    }, delay);
  };
};

const debouncedIncrement = debounce(increment, 10000);

// t = 0: Call debouncedIncrement().
debouncedIncrement(); // i = 0

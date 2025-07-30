function setCancellableTimeout(callback, delay, ...args) {
  let timeoutId = setTimeout(() => {
    callback(); // Exécute le callback après le délai
  }, delay);

  return () => clearTimeout(timeoutId);
}

let i = 0;
// t = 0:
const cancel = setCancellableTimeout(() => {
  i++;
}, 100);
// t = 50:
cancel();

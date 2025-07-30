const setCancellableInterval = (callback, delay) => {
  const intervalId = setInterval(callback, delay);
  const timeoutId = setTimeout(() => clearInterval(() => intervalId), delay);
  // cancel = stop le timeout (donc l'intervalle continue)
  return () => {
    clearTimeout(timeoutId); // stoppe l'annulation automatique
    // l'intervalle continue
  };
};

let i = 0;
// t = 0:
const cancel = setCancellableInterval(() => {
  i++;
}, 10);
// t = 10: i is 1
// t = 20: i is 2
cancel(); // Called at t = 25

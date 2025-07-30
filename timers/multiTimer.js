const managerTime = () => {
  const intervalDico = new Map(); // timerName => { count, intervalId }

  function tick(timerName) {
    const data = intervalDico.get(timerName);
    if (!data) return;

    const { count, intervalId } = data;

    if (count === 0) {
      console.log(`Timer ${timerName}: 🚀 GO`);
      clearInterval(intervalId);
      intervalDico.delete(timerName);
    } else {
      console.log(`Timer ${timerName}: ${count}`);
      // mettre à jour count dans le Map
      intervalDico.set(timerName, { count: count - 1, intervalId });
    }
  }

  return {
    addTimer(timerName, duration) {
      if (intervalDico.has(timerName)) return;

      // tick immédiatement avec affichage de départ
      console.log(`Timer ${timerName}: ${duration}`);

      const intervalId = setInterval(() => tick(timerName), 1000);
      intervalDico.set(timerName, { count: duration - 1, intervalId });
    },

    cancelTimer(timerName) {
      const data = intervalDico.get(timerName);
      if (!data) return;
      clearInterval(data.intervalId);
      intervalDico.delete(timerName);
      console.log(`🛑 Timer ${timerName} cancelled.`);
    },

    cancelAll() {
      for (const [name, data] of intervalDico.entries()) {
        clearInterval(data.intervalId);
        console.log(`🛑 Timer ${name} cancelled.`);
      }
      intervalDico.clear();
      console.log('❌ All timers cancelled.');
    },
  };
};

const manager = managerTime();
manager.addTimer('A', 5);
manager.addTimer('B', 8);

//setTimeout(() => manager.cancelTimer('A'), 3000); // annule timer A après 3 secondes

//setTimeout(() => manager.cancelAll(), 10000); // stoppe tout au bout de 10 secondes

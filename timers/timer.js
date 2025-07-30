const createCountdown = (startValue) => {
  count = startValue;
  let intervalId = null;

  function tick() {
    console.log(count);

    if (count == 0) {
      clearInterval(intervalId);
      intervalId = null;
      console.log('GO');
    }
    return count--;
  }
  return {
    start() {
      if (intervalId == null && count == startValue) {
        tick();
        intervalId = setInterval(tick, [1000]);
      }
    },
    stop() {
      const stopInt = clearInterval(intervalId);
      return stopInt;
    },
  };
};
const timer = createCountdown(5);

console.log(timer.start());
setTimeout(() => timer.stop(), 2500); // pause vers 2s

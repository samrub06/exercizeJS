const sleep = (duration) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log(`This runs after ${duration} seconds`);
      resolve('Ok ');
    }, duration);
  });
};

(async () => {
  console.log('Hi');

  await sleep(3000); // 3 secondes
  console.log('Continue after sleep');
})();

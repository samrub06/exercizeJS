const sleep = (duration) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log(`This runs after ${duration} seconds`);
      resolve('Ok ');
    }, duration);
  });
};

const delay = async () => {
  const promise = new Promise((res) =>
    setTimeout(() => {
      res('ok');
    }, 1000)
  );
  return promise.then((result) => result);
};

const run = async () => {
  console.log('hi');
  const result = await delay();
  console.log(result);

  console.log('end');
};
run();

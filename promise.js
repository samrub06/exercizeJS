const promiseSimple = () => {
  return new Promise((res, rej) => {
    const success = true; // simulate a condition

    if (success) {
      console.log('resolving');
      res('ok');
    } else {
      console.log(rej);
    }
  });
};

let i = 0;
let intervalId;
const promiseExec = () =>
  promiseSimple()
    .then((result) => {
      i++;
      console.log(result);

      if (i == 5) {
        clearInterval(intervalId, 5000);
      }
    })
    .catch((e) => console.log(e));

intervalId = setInterval(promiseExec, 1000);

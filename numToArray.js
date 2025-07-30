let num = 42718;

let array = num.toString().split('').map(Number);

console.log(array);

function fetchAllUsers() {
  const ids = [1, 2, 3, 6];
  const promises = ids.map(fetchUserById); // tableau de promesses
  return Promise.all(promises).then((users) => {
    console.log(users);
  });
}

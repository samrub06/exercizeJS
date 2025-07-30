const userIds = [1, 2, 3, 4];

function fetchApi(id) {
  return new Promise((resolve) => {
    setTimeout(() => resolve({ id, name: `User ${id}` }), Math.random() * 1000);
  });
}

//fetchApi(1).then((x) => console.log(x));

async function fetchAllUsers(ids) {
  let result = [];
  return ids.map((x) =>
    fetchApi(x)
      .then((x) => result.push(x))
      .finally(() => result)
  );
}

fetchAllUsers(userIds);
// Affichage attendu après quelques secondes :
// [
//   { id: 1, name: 'User 1' },
//   { id: 2, name: 'User 2' },
//   ...
// ]

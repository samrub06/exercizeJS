const a = ['user', 'info', 'name'];
const b = 'Jean';

//obj.user.info.name = "Jean";

const setDeep = (obj = {}, path, value) => {
  const keys = path.split('.');
  let current = obj;
  for (let i = 0; i < keys.length; i++) {
    const key = keys[i];
    console.log(obj);

    if (i === keys.length - 1) {
      current[key] = value; // 💥 poser la valeur ici
    } else {
      if (!current[key]) {
        current[key] = {};
      }
      current = current[key];
    }
  }
  return obj;
};

const getDeep = (obj, path) => {
  const keys = path.split('.');

  let current = obj;
  for (let i = 0; i < keys.length; i++) {
    const key = keys[i];
    if (!current[key]) {
      return null;
    }
    current = current[key];
  }
  return current;
};

const obj = {
  user: {
    info: {
      name: 'Jean',
    },
  },
};
//setDeep(obj, a, b);
console.log(getDeep(obj, 'user.info.name'));

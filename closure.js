function creerCompteur() {
  let compteur = 0;

  return function () {
    compteur++;
    console.log(compteur);
  };
}

function makeCounter(initialValue = 0) {
  let i = initialValue;

  const innerFunction = () => {
    i++;
    console.log(i);
  };

  return innerFunction;
}

const count = makeCounter(4);
count();
count();

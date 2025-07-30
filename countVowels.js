const countVowels = (value) => {
  const vowels = ['a', 'e', 'i', 'o', 'u'];
  return value
    .toLowerCase()
    .split('')
    .filter((x) => vowels.includes(x).length);
};
console.log(countVowels('radar'));

//console.log("hello".includes("ell")); // true
//console.log([1, 2, 3].includes(2));    // true
//console.log([1, 2, 3].includes("2"));  // false (pas de conversion de type)
//console.log(str.includes("Hello"));  // false (sensible à la casse)

const vowels =(string) =>{

  const arrString = string.toLowerCase()
  const vowels = 'aeiou';
  let count = 0;

  for (const element of arrString){
    vowels.includes(element)
    count ++
  }
    return count;

}

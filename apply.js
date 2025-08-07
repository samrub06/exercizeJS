//Exo 1

function greet(greeting, name) {
  console.log(`${greeting}, ${name}`);
}

const args = ['Hello', 'Alice'];

greet.call(this, ...args);
//greet.call(this, args);

const user = {
  name: 'Jean',
  say(greeting) {
    console.log(`${greeting}, I'm ${this.name}`);
  },
};

// Exo2

const user1 = {
  name: 'Jean',
  say(greeting) {
    console.log(`${greeting}, I'm ${this.name}`);
  },
};

const sayFn = user1.say;
//// sayFn('Bonjour') // ❌ undefined

sayFn.call(user1, 'Bonjour');

// exo3 : recreate a fucntion callWithContext(fn, context, args)

const person = {
  name: 'Anna',
};

function sayHello() {
  console.log(`Hello, I'm ${this.name}`);
}

// 🔧 Cette fonction doit appeler fn avec le contexte donné et les arguments
function callWithContext(fn, context, args) {
  fn.apply(context, args);
}
callWithContext(sayHello, person);

//Exercice 4 – difference between apply ad
// nd call

function introduce(language, country) {
  console.log(`${this.name} speaks ${language} in ${country}`);
}

const person1 = { name: 'Maya' };
const args1 = ['French', 'France'];

introduce.call(person1, ...args1);
introduce.apply(person1, args1);

//Exercice 5 – use le spread ...args instead of .apply

function sum(a, b, c) {
  return a + b + c;
}

const numbers = [2, 4, 6];

sum(...numbers);

interface Named {
  readonly name: string;
}

interface Greetable extends Named {
  greet(phrase: string): void;
}

class Person implements Greetable {
  name: string;
  age: number = 27;

  constructor(n: string) {
    this.name = n;
  }

  greet(phrase: string) {
    console.log(`${phrase} I'm ${this.name}, and I'm ${this.age} years old.`);
  }
}

let user1: Greetable;

user1 = new Person('Hana');
user1.greet('Hi~~');

// user1 = {
//   name: 'Hana',
//   age: 27,
//   greet(phrase: string) {
//     console.log(`${phrase} I'm ${this.name}`);
//   },
// };
//
// user1.greet('Hi- there,');

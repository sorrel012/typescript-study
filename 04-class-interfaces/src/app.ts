interface Person {
  name: string;
  age: number;

  greet(phrase: string): void;
}

let user1: Person;

user1 = {
  name: 'Hana',
  age: 27,
  greet(phrase: string) {
    console.log(`${phrase} I'm ${this.name}`);
  },
};

user1.greet('Hi- there,');

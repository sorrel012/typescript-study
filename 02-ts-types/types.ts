// const person: { name: string; age: number } = {
//   name: 'Hana',
//   age: 27,
// };

// const person = {
//   name: 'Hana',
//   age: 27,
//   hobbies: ['Sports', 'Cooking'],
//   role: [2, 'author'],
// };

enum Role {
  ADMIN = 'ADMIN',
  READ_ONLY = 100,
  AUTHOR = 'AUTHOR',
}

const person = {
  //Object
  name: 'Hana', //string
  age: 27, //number
  hobbies: ['Sports', 'Cooking'], //Array
  career: [2, 'author'], //Tuple,
  role: Role.ADMIN,
};

console.log(person);

let favoriteActivities: (string | number)[];
favoriteActivities = ['Sports', 'Cooking', 2];

let user: [string, number, string] = ['hana', 27, 'F'];

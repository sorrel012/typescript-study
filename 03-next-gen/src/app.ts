const hobbies = ['Sports', 'Cooking'];
const activeHobbies = ['Hiking'];

activeHobbies.push(...hobbies);
console.log(activeHobbies);

const person = {
  name: 'Hana',
  age: 27,
};

const copiedPerson = { ...person };
console.log(copiedPerson);

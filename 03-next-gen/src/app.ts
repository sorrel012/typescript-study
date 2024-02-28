const hobbies = ['Sports', 'Cooking'];
const activeHobbies = ['Hiking'];

activeHobbies.push(...hobbies);
// console.log(activeHobbies);

const person = {
  name: 'Hana',
  age: 27,
};

const copiedPerson = { ...person };
// console.log(copiedPerson);

const add = (...numbers: [number, number, number]) => {
  return numbers.reduce((curResult, curValue) => {
    return curResult + curValue;
  }, 0);
};

const addedNumbers = add(5, 10, 20);
console.log(addedNumbers);

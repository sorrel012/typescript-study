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

const add = (...numbers: number[]) => {
  return numbers.reduce((curResult, curValue) => {
    return curResult + curValue;
  }, 0);
};

const addedNumbers = add(5, 10, 20, 3.7);
// console.log(addedNumbers);

const [hobby1, hobby2, ...remainingHobbies] = activeHobbies;
console.log(remainingHobbies);

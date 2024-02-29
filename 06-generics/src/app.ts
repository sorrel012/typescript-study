// const names: Array<string> = ['Hana', 'Sorrel'];
// names[0].split(' ');
//
// const promise: Promise<string> = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve('This is done!');
//   }, 2000);
// });
//
// promise.then((data) => {
//   data.split(' ');
// });

function merge<T extends object, U extends object>(objA: T, objB: U) {
  return Object.assign({}, objA, objB);
}

const mergedObject = merge<{ name: string }, { age: number }>(
  { name: 'hana' },
  { age: 27 },
);
console.log(mergedObject.age);

interface Lengthy {
  length: number;
}

function countAndDescribe<T extends Lengthy>(element: T): [T, string] {
  let descriptionText = 'Got no value.';
  if (element.length === 1) {
    descriptionText = 'Got 1 element.';
  } else if (element.length > 1) {
    descriptionText = `Got ${element.length} elements`;
  }
  return [element, descriptionText];
}

function extractAndConvert<T extends object, U extends keyof T>(
  obj: T,
  key: U,
) {
  return 'Value: ' + obj[key];
}

extractAndConvert({ name: 'Hana' }, 'name');

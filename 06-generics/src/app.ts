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

function merge<T, U>(objA: T, objB: U) {
  return Object.assign({}, objA, objB);
}

const mergedObject = merge<{ name: string }, { age: number }>(
  { name: 'hana' },
  { age: 27 },
);
console.log(mergedObject.age);

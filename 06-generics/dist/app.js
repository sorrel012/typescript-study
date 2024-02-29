"use strict";
function merge(objA, objB) {
    return Object.assign({}, objA, objB);
}
const mergedObject = merge({ name: 'hana' }, { age: 27 });
console.log(mergedObject.age);
//# sourceMappingURL=app.js.map
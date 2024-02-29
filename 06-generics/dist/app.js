"use strict";
function merge(objA, objB) {
    return Object.assign({}, objA, objB);
}
const mergedObject = merge({ name: 'hana' }, { age: 27 });
console.log(mergedObject.age);
function countAndDescribe(element) {
    let descriptionText = 'Got no value.';
    if (element.length === 1) {
        descriptionText = 'Got 1 element.';
    }
    else if (element.length > 1) {
        descriptionText = `Got ${element.length} elements`;
    }
    return [element, descriptionText];
}
//# sourceMappingURL=app.js.map
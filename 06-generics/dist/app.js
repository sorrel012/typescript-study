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
function extractAndConvert(obj, key) {
    return 'Value: ' + obj[key];
}
extractAndConvert({ name: 'Hana' }, 'name');
class DataStorage {
    constructor() {
        this.data = [];
    }
    addItem(item) {
        this.data.push(item);
    }
    removeItem(item) {
        if (this.data.indexOf(item) === -1) {
            return;
        }
        this.data.splice(this.data.indexOf(item), 1);
    }
    getItems() {
        return [...this.data];
    }
}
const textStorage = new DataStorage();
textStorage.addItem('Hana');
textStorage.addItem('Mana');
textStorage.removeItem('Mana');
const numberStorage = new DataStorage();
numberStorage.addItem(5);
numberStorage.addItem(10);
numberStorage.addItem(15);
numberStorage.removeItem(5);
const objStorage = new DataStorage();
const nameObject = { name: 'Hana' };
objStorage.addItem(nameObject);
objStorage.addItem({ name: 'Mana' });
objStorage.removeItem(nameObject);
function createCourseGoal(title, description, date) {
    let courseGoal = {};
    courseGoal.title = title;
    courseGoal.description = description;
    courseGoal.deadline = date;
    return courseGoal;
}
//# sourceMappingURL=app.js.map
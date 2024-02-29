"use strict";
var _a;
const e1 = {
    name: 'Hana',
    privileges: ['create-server'],
    startDate: new Date(),
};
let test = 3;
function add(a, b) {
    if (typeof a === 'string' || typeof b === 'string') {
        return a.toString() + b.toString();
    }
    return a + b;
}
const result = add(1, 5);
const result2 = add('Hana', 'Two');
const fetchedUserData = {
    id: 'u1',
    name: 'Hana',
    job: { title: 'Developer', description: 'Front-end developer' },
};
console.log((_a = fetchedUserData.job) === null || _a === void 0 ? void 0 : _a.description);
const userInput = null;
const storedData = userInput !== null && userInput !== void 0 ? userInput : 'DEFAULT';
//# sourceMappingURL=app.js.map
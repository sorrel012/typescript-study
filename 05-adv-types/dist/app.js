"use strict";
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
//# sourceMappingURL=app.js.map
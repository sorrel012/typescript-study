"use strict";
let add;
add = (n1, n2) => n1 + n2;
class Person {
    constructor(n) {
        this.age = 27;
        this.name = n;
    }
    greet(phrase) {
        console.log(`${phrase} I'm ${this.name}, and I'm ${this.age} years old.`);
    }
}
let user1;
user1 = new Person('Hana');
user1.greet('Hi~~');
//# sourceMappingURL=app.js.map
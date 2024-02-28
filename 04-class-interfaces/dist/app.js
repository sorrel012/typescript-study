"use strict";
class Department {
    constructor(n) {
        this.employees = [];
        this.name = n;
    }
    describe() {
        console.log('Department: ' + this.name);
    }
    addEmployee(employee) {
        this.employees.push(employee);
    }
    printEmployeeInformation() {
        console.log(`${this.employees.length}명, ${this.employees}`);
    }
}
const accounting = new Department('Accounting');
accounting.describe();
accounting.addEmployee('Hana');
accounting.addEmployee('sorrel');
accounting.printEmployeeInformation();
//# sourceMappingURL=app.js.map
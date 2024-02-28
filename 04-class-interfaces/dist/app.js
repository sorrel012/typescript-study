"use strict";
class Department {
    constructor(id, name) {
        this.id = id;
        this.name = name;
        this.employees = [];
    }
    describe() {
        console.log(`Department (${this.id}): ${this.name}`);
    }
    addEmployee(employee) {
        this.employees.push(employee);
    }
    printEmployeeInformation() {
        console.log(`${this.employees.length}명, ${this.employees}`);
    }
}
const accounting = new Department('D1', 'Accounting');
accounting.describe();
accounting.addEmployee('Hana');
accounting.addEmployee('sorrel');
accounting.printEmployeeInformation();
//# sourceMappingURL=app.js.map
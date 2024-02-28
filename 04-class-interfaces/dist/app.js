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
class ITDepartment extends Department {
    constructor(id, admins) {
        super(id, 'IT');
        this.admins = admins;
    }
}
const accounting = new ITDepartment('D1', ['Hana', 'So']);
accounting.describe();
accounting.addEmployee('Hana');
accounting.addEmployee('sorrel');
accounting.printEmployeeInformation();
//# sourceMappingURL=app.js.map
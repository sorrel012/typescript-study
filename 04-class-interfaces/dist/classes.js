"use strict";
class Department {
    constructor(id, name) {
        this.id = id;
        this.name = name;
        this.employees = [];
    }
    static createEmployee(name) {
        return { name: name };
    }
    describe() {
        console.log(`Department (${this.id}): ${this.name}`);
    }
    addEmployee(employee) {
        if (!this.employees.includes(employee)) {
            this.employees.push(employee);
        }
    }
    printEmployeeInformation() {
        console.log(`${this.employees.length}명, ${this.employees}`);
    }
}
Department.fiscalYear = 2024;
class ITDepartment extends Department {
    constructor(id, admins) {
        super(id, 'IT');
        this.admins = admins;
    }
}
const employee1 = Department.createEmployee('Han');
const it = new ITDepartment('D1', ['Hana']);
it.addEmployee('Hana');
it.addEmployee('Sorrel');
class AccountingDepartment extends Department {
    get mostRecentReport() {
        if (this.reports)
            return this.lastReport;
        throw new Error('No report found.');
    }
    set mostRecentReport(value) {
        if (!value)
            throw new Error('Please pass in a valid value!');
        this.addReport(value);
    }
    constructor(id, reports) {
        super(id, 'Accounting');
        this.reports = reports;
        this.lastReport = reports[0];
    }
    static getInstance() {
        if (AccountingDepartment.instance) {
            return this.instance;
        }
        this.instance = new AccountingDepartment('D2', []);
        return this.instance;
    }
    describe() {
        console.log('Accounting Department = ID: ' + this.id);
    }
    addReport(text) {
        this.reports.push(text);
    }
    printReport() {
        console.log(this.reports);
    }
}
const accounting = AccountingDepartment.getInstance();
accounting.addReport('Something went wrong...');
console.log(accounting.mostRecentReport);
accounting.addEmployee('Hana');
accounting.addEmployee('Sorrel');
accounting.describe();
//# sourceMappingURL=classes.js.map
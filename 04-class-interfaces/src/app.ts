class Department {
  private id: string;
  private name: string;
  private employees: string[] = [];

  constructor(n: string) {
    this.name = n;
  }

  describe(this: Department) {
    console.log('Department: ' + this.name);
  }

  addEmployee(employee: string) {
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

// const accountingCopy = {
//   name: 'Department copy',
//   describe: accounting.describe,
// };
// accountingCopy.describe();

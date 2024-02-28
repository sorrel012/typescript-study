class Department {
  // private id: string;
  // private name: string;
  private employees: string[] = [];

  constructor(
    private readonly id: string,
    public name: string,
  ) {
    // this.id = id;
    // this.name = n;
  }

  describe(this: Department) {
    console.log(`Department (${this.id}): ${this.name}`);
  }

  addEmployee(employee: string) {
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

// const accountingCopy = {
//   name: 'Department copy',
//   describe: accounting.describe,
// };
// accountingCopy.describe();

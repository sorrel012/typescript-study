class Department {
  static fiscalYear = 2024;
  // private id: string;
  // private name: string;
  protected employees: string[] = [];

  constructor(
    private readonly id: string,
    public name: string,
  ) {
    // this.id = id;
    // this.name = n;
  }

  static createEmployee(name: string) {
    return { name: name };
  }

  describe(this: Department) {
    console.log(`Department (${this.id}): ${this.name}`);
  }

  addEmployee(employee: string) {
    if (!this.employees.includes(employee)) {
      this.employees.push(employee);
    }
  }

  printEmployeeInformation() {
    console.log(`${this.employees.length}명, ${this.employees}`);
  }
}

class ITDepartment extends Department {
  constructor(
    id: string,
    public admins: string[],
  ) {
    super(id, 'IT');
  }
}

const employee1 = Department.createEmployee('Han');

const it = new ITDepartment('D1', ['Hana']);

it.addEmployee('Hana');
it.addEmployee('Sorrel');

class AccountingDepartment extends Department {
  private lastReport: string;

  get mostRecentReport() {
    if (this.lastReport) return this.lastReport;
    throw new Error('No report found.');
  }

  set mostRecentReport(value: string) {
    if (!value) throw new Error('Please pass in a valid value!');
    this.addReport(value);
  }

  constructor(
    id: string,
    private reports: string[],
  ) {
    super(id, 'Accounting');
    this.lastReport = reports[0];
  }

  addReport(text: string) {
    this.reports.push(text);
  }

  printReport() {
    console.log(this.reports);
  }
}

const accounting = new AccountingDepartment('D1', []);
accounting.addReport('Something went wrong...');

accounting.addEmployee('Hana');
accounting.addReport('Sorrel');

// accounting.describe();
// accounting.addEmployee('Hana');
// accounting.addEmployee('sorrel');
// accounting.printEmployeeInformation();

// const accountingCopy = {
//   name: 'Department copy',
//   describe: accounting.describe,
// };
// accountingCopy.describe();

'use strict';

const myApp = require("../app/index.js");

describe("Employee class: the type of employee", function()  {
  it("should be a type of 'object', and an instance of the Employee class", function() {
    let engineer = new myApp.Employee();
    expect(typeof engineer).toEqual('object');
    expect(engineer instanceof myApp.Employee).toBeTruthy();
  });

  it("Employee with surname 'Adekunle' and firstname 'Seun' should return 'Adekunle Seun'", function() {
    let projectManager = new myApp.Employee();
    projectManager.setName("Adekunle", "Seun");
    expect(projectManager.surname + " " + projectManager.firstName).toEqual("Adekunle Seun");
  });

  it("Employee with name not a string should return 'Invalid name'", function() {
    let engineer = new myApp.Employee();
    expect(engineer.setName(212, 33)).toEqual("Invalid name");
  });

  it("Employee with age not an integer should return 'Invalid age'", function() {
      let supervisor = new myApp.Employee();
      expect(supervisor.setAge('56')).toEqual('Invalid age');
  });

  it("Permanent staff with salary 160000 is a manager should return false", function() {
      let employee = new myApp.Employee();
      let isManager = employee.isManager("Permanent", 160000);
      expect(isManager).toEqual(false);
  });

  it("Minimum Salary for Permanent staffs should return 170000", function() {
      let employee = new myApp.Employee();
      employee.setMinimumSalary(9, "Permanent");
      expect(employee.minimumSalary).toEqual(170000);
  });

  it("A Contract staff with salary 150000 as a manager should return true", function() {
      let employee = new myApp.Employee();
      let isManager = employee.isManager("Contract", 150000);
      expect(isManager).toEqual(true);
  });

  it("should return retired when years of service is 35", function() {
    let permSec = new myApp.Employee();
    expect(permSec.retire(35)).toEqual("Retired");
  });
});

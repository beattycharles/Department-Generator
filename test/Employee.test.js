const Employee = require("../lib/employee");

  describe("Get", () => {
    it("Get the name of the employee", () => {
      const employeeName = 'charlie';
      const fakeEmployee = new Employee('charlie', 1, "no@no.com");
      expect(fakeEmployee.getName()).toBe(employeeName);
    });

    it("Get id of employee", () => {
  const employeeId = 1;
  const fakeEmployee = new Employee("charlie", 1, "no@no.com");
  expect(fakeEmployee.getId()).toBe(employeeId);
    });

    it("Get email of employee", () => {
    const employeeEmail = "no@no.com";
    const fakeEmployee = new Employee("charlie", 1, "no@no.com");
    expect(fakeEmployee.getEmail()).toBe(employeeEmail);
    });

    it("Get role of the employee", () => {
     const employeeRole = "Employee";
     const fakeEmployee = new Employee("charlie", 1, "no@no.com");
     expect(fakeEmployee.getRole()).toBe(employeeRole);
    });
  });

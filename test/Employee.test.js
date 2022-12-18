const Employee = require("../lib/employee");

describe("employee", () =>
  describe("Get", () => {
    it("Get the name of the employee", () => {
      const Employee = ("charlie", 1, "no@no.com");
      const result = Employee.name;
      expect(result).toString("charlie");
    });

    it("Get id of employee", () => {
      const Employee = ("charlie", 1, "no@no.com");
      const result = Employee.getId;
      expect(result).toString(1);
    });

    it("Get email of employee", () => {
      const Employee = ("charlie", 1, "no@no.com");
      const result = Employee.email;
      expect(result).toString("no@no.com");
    });

    it("Get role of the employee", () => {
      const employee = ("charlie", 1, "no@no.com");
      employee.role = "Employee";
      const result = Employee.role;
      expect(result).toString("Employee");
    });
  }));

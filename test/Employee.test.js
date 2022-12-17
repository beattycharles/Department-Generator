const Employee = require('../lib/employee');

describe('Get', () => {
    fit('Get the name of the employee', () => {
        const employee = new Employee('charlie', 1, 'no@no.com')
        const result = Employee.getName(new Employee('charlie', 1, 'no@no.com'))
        expect(result).toEqual(employee.Name);
    });

    it('Get id of employee', () => {
        const employee = new Employee('charlie', 1, 'no@no.com')
        const result = Employee.getId(new Employee('charlie', 1, 'no@no.com'))
        expect(result).toEqual(employee.id);
    });

    it('Get email of employee', () => {
        const employee = new Employee('charlie', 1, 'no@no.com')
        const result = Employee.getId(new Employee('charlie', 1, 'no@no.com'))
        expect(result).toEqual(employee.email);
    });

    it('Get role of the employee', () => {
        const employee = new Employee('charlie', 1, 'no@no.com')
        employee.role = 'Employee';
        const result = Employee.getId(new Employee('charlie', 1, 'no@no.com'))
        expect(result).toEqual(employee.id);
    });
})
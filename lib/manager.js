const Employee = require('./employee.js');

class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
        super(name, id, email);
        this.officeNumber = officeNumber;
    }

    getRole() {
        return 'Manager'
    }
}

const manager = new Manager('Bob', 4, 'bestmanager@none.com', 8675309);
manager.getEmail();
manager.getId();
manager.getName();
manager.getRole();

module.exports = Manager
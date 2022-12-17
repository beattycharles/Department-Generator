const { NONAME } = require('dns');
const Employee = require('./employee');

class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
        super(name, id, email);
        this.officeNumber = officeNumber;
    }

    getRole() {
        return 'Manger'
    }
}

const manager = new Manager('Bob', 4, 'bestmanger@none.com', 8675309);
manager.getEmail();
manager.getId();
manager.getName();
manager.getofficeNumber();
manager.getRole();
const Employee = require('./employee.js');

class Intern extends Employee {
    constructor(name, Id, email, school) {
        super(name, Id, email);
        this.school = school;
    }

    getSchool(){
        return this.school
    }

    getRole() {
        return 'Intern'
    }
}

const intern = new Intern('Charlie', 3, 'noiterns@none.com', 'UNCC');
intern.getEmail();
intern.getId();
intern.getName();
intern.getSchool();
intern.getRole();

module.exports = Intern;
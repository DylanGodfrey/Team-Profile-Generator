const Employee = require("./Employee");

class Intern extends Employee {
  constructor(name, id, email, school) {
    // super = Share properties with parent Class
    super(name, id, email);
    // append Intern's unique property to the super Employee Class
    this.school = school;
  }

  getSchool() {
    return this.school;
  }

  // Will override parent method of same name
  getRole() {
    return "Intern";
  }
}

module.exports = Intern;
const Employee = require("./Employee");

class Manager extends Employee {
  constructor(name, id, email, officeNumber) {
    // super = Share properties with parent Class
    super(name, id, email);
    // append Manager's unique property to the super Employee Class
    this.officeNumber = officeNumber;
  }

  getRole() {
    return "Manager";
  }
}

module.exports = Manager;

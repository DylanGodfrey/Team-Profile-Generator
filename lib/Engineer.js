const Employee = require("./Employee");

class Engineer extends Employee {
  constructor(name, id, email, github) {
    // super = Share properties with parent Class
    super(name, id, email); 
    // append Employer's unique property to the super Employee Class 
    this.github = github;
  }

  getGithub() {
    return this.github;
  }

  // Will override parent method of same name
  getRole() {
    return "Engineer";
  }
}

module.exports = Engineer;
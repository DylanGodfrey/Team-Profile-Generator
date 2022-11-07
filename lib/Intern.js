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

  addToHTML() {
    return `
    <div class="card">
    <div class="content">
        <div class="image">
          <img src="./images/profile/${this.getName()}.png">
        </div>
        <div class="card-header">
        <div class="ui header">${this.getName()}</div>
        <div class="meta">
          ${this.getId()}
          ${this.getRole()}
        </div>
      </div> 
      <div class="description">
        School: ${this.getSchool()}
      </div>
      <div class="extra content">
          ${this.getEmail()}
        </div>
      </div>
    </div>
    `;
  }
}

module.exports = Intern;
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

  getOffice() {
    return this.officeNumber;
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
        Office: ${this.getOffice()}
      </div>
      <div class="extra content">
          ${this.getEmail()}
        </div>
      </div>
    </div>
    `;
  }
}

module.exports = Manager;

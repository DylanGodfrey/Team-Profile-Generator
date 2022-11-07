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
        Github: <a href="github.com/${this.getGithub()}">${this.getGithub()}</a>
      </div>
      <div class="extra content">
          ${this.getEmail()}
        </div>
      </div>
    </div>
    `;
  }
  
}

module.exports = Engineer;
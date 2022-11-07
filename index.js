const Employee = require("./lib/Employee");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");

const fs = require("fs");
const inquirer = require("inquirer");


// Append newly created Employees to the template HTML
function appendToFile(fileName, data) {
  fs.appendFile(fileName, data, (err) => {});
}

init();

async function init() {
  //Copy over fresh template file to destination file
  fs.copyFile("./src/template.html", "./dist/index.html", (err) => {
    if (err) throw err;
    //console.log('./src/template.html was copied to./dist/index.html');
  });

  // ADD a new Manager Employee
  await addEmployee("Manager");
}

// ADD a new Engineer Employee
async function addEmployee(selectedRole) {

  // Questions to ask all about all new Employees
  const genericQuestions = [
    `${selectedRole}'s Name:`,
    `${selectedRole}'s ID:`,
    `${selectedRole}'s Email:`,
    "Add another Employee?",
  ]
  
  // Role specific questions to query
  const roleSpecific = [
    `${selectedRole}'s Office Number:`,
    `${selectedRole}'s Github:`,
    `${selectedRole}'s School:`,
  ];
  
  // Array to select what kind of Employee to add, or end the queries
  const chooseRole = ["Engineer", "Intern", "Finish"];

  // Determine which role has which specific role question
  switch (selectedRole) {
    case "Manager":
      roleIndex = 0;
      break;
    case "Engineer":
      roleIndex = 1;
      break;
    case "Intern":
      roleIndex = 2;
      break;
  }
  

  // Employee prompts
  // Validates inputs for name (alpha-only), id (numeric-only), email and the roleSpecific as alphanumeric 
  await inquirer
    .prompt([
      { type: "input", message: genericQuestions[0], name: "name", validate: function(name) { return /^[a-zA-Z]+$/.test(name) }},
      { type: "input", message: genericQuestions[1], name: "id", validate: function(id) { return /^[0-9]+$/.test(id)}},
      { type: "input", message: genericQuestions[2], name: "email", validate: function(email) { return /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()\.,;\s@\"]+\.{0,1})+([^<>()\.,;:\s@\"]{2,}|[\d\.]+))$/.test(email) }},
      { type: "input", message: roleSpecific[roleIndex], name: "specific", validate: function(specific) { return /^[a-zA-Z0-9]+$/.test(specific) }},
      {
        type: "list",
        message: genericQuestions[3],
        choices: chooseRole,
        name: "add",
      },
    ])
    .then((response) => {

      // Can't do a single variable like: const employee = new `${selectedRole}` for all of them? So have to create each object specifically
      switch (selectedRole) {
        case "Engineer":
          const engineer = new Engineer(
            response.name,
            response.id,
            response.email,
            response.specific
          );
          //Use Object Method to generate and append the new Employee to the HTML
          appendToFile("./dist/index.html", engineer.addToHTML());
          break;
        case "Intern":
          const intern = new Intern(
            response.name,
            response.id,
            response.email,
            response.specific
          );
          appendToFile("./dist/index.html", intern.addToHTML());
          break;
        case "Manager":
          const manager = new Manager(
            response.name,
            response.id,
            response.email,
            response.specific
          );
          appendToFile("./dist/index.html", manager.addToHTML());
          break;
      }
      // Repeat this function with the new employee role or exit
      if (response.add === "Engineer") {
        addEmployee("Engineer");
      } else if (response.add === "Intern") {
        addEmployee("Intern");
      } else {
          //Close HTML tags when finished
          appendToFile("./dist/index.html",
          `</section>
        </body>
      </html>`
          );
      }
    },
  );
}
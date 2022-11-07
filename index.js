const Employee = require("./lib/Employee");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");

//const fs = require("fs"); TODO: ADD fs functionality
const inquirer = require("inquirer");

// TODO: Repeating similiar questions isn't very DRY, replace with `${role}`s?


// Array to select what kind of Employee to add, or end the queries
const chooseRole = ["Engineer", "Intern", "Finish"];

init();
async function init() {
  // ADD a new Manager Employee
  await addEmployee("Manager");
}

// ADD a new Engineer Employee
async function addEmployee(selectedRole) {

  const genericQuestions = [
    `${selectedRole}'s Name:`,
    `${selectedRole}'s ID:`,
    `${selectedRole}'s Email:`,
    "Add another Employee?",
  ]
  

  const roleSpecific = [
    `${selectedRole}'s Office Number:`,
    `${selectedRole}'s Github:`,
    `${selectedRole}'s School:`,
  ];

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
  

  // Manager prompts
  await inquirer
    .prompt([
      { type: "input", message: genericQuestions[0], name: "name" },
      { type: "input", message: genericQuestions[1], name: "id" },
      { type: "input", message: genericQuestions[2], name: "email" },
      { type: "input", message: roleSpecific[roleIndex], name: "specific" },
      {
        type: "list",
        message: genericQuestions[3],
        choices: chooseRole,
        name: "add",
      },
    ])
    .then((response) => {

      // Can't do a single variable like: const employee = new `${selectedRole}` for all of them? So have to create each Class specifically
      switch (selectedRole) {
        case "Engineer":
          const engineer = new Engineer(
            response.name,
            response.id,
            response.email,
            response.specific
          );
        case "Intern":
          const intern = new Intern(
            response.name,
            response.id,
            response.email,
            response.specific
          );
          case "Manager":
          const manager = new Manager(
            response.name,
            response.id,
            response.email,
            response.specific
          );
      }
      if (response.add === "Engineer") {
        addEmployee("Engineer");
      } else if (response.add === "Intern") {
        addEmployee("Intern");
      } else {
        console.log("end");
      }
    },
  );
}
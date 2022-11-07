const Employee = require("./lib/Employee");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");

//const fs = require("fs"); TODO: ADD fs functionality
const inquirer = require("inquirer");

// TODO: Repeating similiar questions isn't very DRY, replace with `${role}`s?
const questions = [
  "Manager's Name:",
  "Manager's ID:",
  "Manager's Email:",
  "Manager's Office Number:",
  "Engineer's Name:",
  "Engineer's ID:",
  "Engineer's Email:",
  "Engineer's Github:",
  "Intern's Name:",
  "Intern's ID:",
  "Intern's Email:",
  "Intern's school:",
  "Add another Employee?",
];

// Array to select what kind of Employee to add, or end the queries
const chooseRole = ["Engineer", "Intern", "Finish"];

init();
// TODO: Each of these fucntions are very similar, make new methods to reduce redundancies?
function init() {
  // ADD a new Manager Employee
  inquirer
    .prompt([
      { type: "input", message: questions[0], name: "name" },
      { type: "input", message: questions[1], name: "id" },
      { type: "input", message: questions[2], name: "email" },
      { type: "input", message: questions[3], name: "office" },
      // Query if they would like to add another employee
      {
        type: "list",
        message: questions[12],
        choices: chooseRole,
        name: "add",
      },
    ])
    .then((response) => {

      // create the new Manager using queried info
      const manager = new Manager(
        response.name,
        response.id,
        response.email,
        response.office
      );
      // Go through query process again using that role's specific queries for each new Employee until told to stop
      if (response.add === "Engineer") {
        addEngineer();
      } else if (response.add === "Intern") {
        addIntern();
      } else {
        console.log("end");
      }
    });
}

// ADD a new Engineer Employee
function addEngineer() {
  inquirer
    .prompt([
      { type: "input", message: questions[4], name: "name" },
      { type: "input", message: questions[5], name: "id" },
      { type: "input", message: questions[6], name: "email" },
      { type: "input", message: questions[7], name: "github" },
      {
        type: "list",
        message: questions[12],
        choices: chooseRole,
        name: "add",
      },
    ])
    .then((response) => {
      const engineer = new Engineer(
        response.name,
        response.id,
        response.email,
        response.github
      );
      if (response.add === "Engineer") {
        addEngineer();
      } else if (response.add === "Intern") {
        addIntern();
      } else {
        console.log("end");
      }
    });
}

// ADD a new Intern Employee
function addIntern() {
  inquirer
    .prompt([
      { type: "input", message: questions[8], name: "name" },
      { type: "input", message: questions[9], name: "id" },
      { type: "input", message: questions[10], name: "email" },
      { type: "input", message: questions[11], name: "school" },
      {
        type: "list",
        message: questions[12],
        choices: chooseRole,
        name: "add",
      },
    ])
    .then((response) => {
      const intern = new Intern(
        response.name,
        response.id,
        response.email,
        response.school
      );
      if (response.add === "Engineer") {
        addEngineer();
      } else if (response.add === "Intern") {
        addIntern();
      } else {
        console.log("end");
      }
    });
}
const Manager = require("./lib/Manager");
const Intern = require("./lib/Intern");
const Engineer = require("./lib/Engineer");
const bp = require("./templates/mainhtml.js");
const ic = require("./templates/internhtml");
const ec = require("./templates/engineerhtml");
let firstbuild = true;

const inquirer = require("inquirer");
const fs = require("fs");
let team = [];
var newemployee = {};

function repeatQuery() {
  inquirer
    .prompt([
      {
        type: "list",
        message: "Would you like to add an employee to your team?",
        name: "repeat",
        choices: ["Yes", "No"]
      }
    ])
    .then(function(answers) {
      if (answers.repeat === "Yes") {
        buildEmployee();
      } else if (answers.repeat === "No") {
        console.log(team);
        printTeam();
      }
    })
    .catch(function(error) {
      console.log(error);
    });
}

function getEngineer(newemployee) {
  inquirer
    .prompt([
      {
        type: "input",
        name: "github",
        message: "Github username: "
      }
    ])
    .then(function(answers) {
      newengineer = new Engineer(
        newemployee.name,
        newemployee.id,
        newemployee.email,
        "Engineer",
        answers.github
      );
      team.push(newengineer);
      repeatQuery();
    })
    .catch(function(error) {
      console.log(error);
    });
}

function getIntern(newemployee) {
  inquirer
    .prompt([
      {
        type: "input",
        name: "school",
        message: "Enter school: "
      }
    ])
    .then(function(answers) {
      newintern = new Intern(
        newemployee.name,
        newemployee.id,
        newemployee.email,
        "Intern",
        answers.school
      );
      team.push(newintern);
      repeatQuery();
    })
    .catch(function(error) {
      console.log(error);
    });
}

function compilePage() {
  let engineergroup = "";
  let interngroup = "";

  for (let i = 0; i < team.length; i++) {
    if (team[i].role === "Engineer") {
      engineergroup += ec(team[i]);
    } else if (team[i].role === "Intern") {
      interngroup += ic(team[i]);
    }
  }
  return bp(team, engineergroup, interngroup);
}


function printTeam() {
  fs.writeFile("./output/teamsheet.html", compilePage(), function(err) {
    if (err) {
      console.log(err);
    }
    console.log("Done!");
  });
}

function getRole(newemployee) {
  inquirer
    .prompt([
      {
        type: "list",
        message: "Which kind of employee are you adding?",
        name: "role",
        choices: ["Engineer", "Intern"]
      }
    ])
    .then(function(answers) {
      if (answers.role === "Engineer") {
        getEngineer(newemployee);
      } else if (answers.role === "Intern") {
        getIntern(newemployee);
      }
    });
}

function buildEmployee() {
  inquirer
    .prompt([
      {
        type: "input",
        name: "name",
        message: "Enter your name: "
      },
      {
        type: "input",
        name: "id",
        message: "Enter your ID: "
      },
      {
        type: "input",
        name: "email",
        message: "Enter your email: "
      }
    ])
    .then(function(answers) {
      const newemployee = {
        name: answers.name,
        id: answers.id,
        email: answers.email,
      };
      if (firstbuild === true) {
        firstbuild = false;
        initMananger(newemployee);
      } else {
      getRole(newemployee);
    }
    })
    .catch(function(error) {
      console.log(error);
    });
}

function initMananger(employee) {
  inquirer
    .prompt([
      {
        type: "input",
        name: "officeNumber",
        message: "Enter your office number: "
      }
    ])
    .then(function(answers) {
      const newmanager = new Manager(
        employee.name,
        employee.id,
        employee.email,
        answers.officeNumber
      );
      team.push(newmanager);
      // buildEmployee();
      repeatQuery();
    })
    .catch(function(error) {
      console.log(error);
    });
}

buildEmployee();

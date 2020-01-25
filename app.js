const Employee = require("./lib/Employee");
const Manager = require("./lib/Manager");
const Intern = require("./lib/Intern");
const Engineer = require("./lib/Engineer");

const inquirer = require("inquirer");
const fs = require('fs');
let team = [];
var newemployee = {};
let github;


function getGithub() {
    inquirer.prompt([
        {
            type: "input",
            name: "github",
            message: "Github userame: "
        },
    ])
    github = github
}

function getSchool() {
    inquirer.prompt([
        {
            type: "input",
            name: "school",
            message: "Intern's school: "
        },
    ])
}

function addEmployee() {
    inquirer.prompt([
        {
            type: "input",
            name: "name",
            message: "Employee name: "
        },
        {
            type: "input",
            name: "id",
            message: "Employee ID: "
        },
        {
            type: "input",
            name: "email",
            message: "Employee email: "
        },
        {
            type: "list",
            message: "Which role?",
            name: "role",
            choices: ["Engineer",
                "Intern",
                "All done."]
        }
    ]).then(function (answers) {
        console.log(answers)
        if (answers.role === "Engineer") {
            getGithub();
            newemployee = new Engineer(answers.name, answers.id, answers.email, answers.role, github);
            team.push(newemployee);
            console.log(team);
        }
        else if (answers.role === "Intern") {
            getSchool();
            newemployee = new Intern(answers.name, answers.id, answers.email, answers.role, answers.school);
            team.push(newemployee);
            console.log(team);
        }
        else {
            inquirer.prompt([
                {
                    type: "list",
                    message: "Would you like to add more?",
                    name: "continue",
                    choices: ["Yes",
                        "All done."]
                }
            ])
            if (answers.continue === "Yes") {
                addEmployee();
            }
            else {
                console.log("Generating page ...")
            }
        }
    })
        .catch(function (error) {
            console.log(error);
        })
}





function initMananger() {
    inquirer.prompt([
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
        },
        {
            type: "input",
            name: "office",
            message: "Enter your office number: "
        }
    ]).then(function (answers) {
        console.log(answers)
        const newmanager = new Manager(answers.name, answers.id, answers.email, answers.office);
        team.push(newmanager);
        console.log("Let's build your team!");
        addEmployee();
    }).catch(function (error) {
        console.log(error);
    });
}


initMananger();

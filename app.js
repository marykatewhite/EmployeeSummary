function gogogo() {
    const Employee = require("./lib/Employee");
    const Manager = require("./lib/Manager");
    const Intern = require("./lib/Intern");
    const Engineer = require("./lib/Engineer");

    const inquirer = require("inquirer");
    const fs = require('fs');
    let team = [];


    inquirer.prompt([
        {
            type: "input",
            name: "name",
            message: "Enter Manager's Name: "
        },
        {
            type: "input",
            name: "id",
            message: "Enter ID: "
        },
        {
            type: "input",
            name: "email",
            message: "Enter email: "
        },
        {
            type: "input",
            name: "office",
            message: "Enter office number: "
        }
    ]).then(function ({ name, id, email, office }) {
        const newmanager = new Manager(name, id, email, office);
        team.push(newmanager);
        console.log(newmanager);
    }).catch(function (error) {
        console.log(error);
    });

}

gogogo();
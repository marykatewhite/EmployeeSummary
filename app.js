const Manager = require("./lib/Manager");
const Intern = require("./lib/Intern");
const Engineer = require("./lib/Engineer");

const inquirer = require("inquirer");
const fs = require('fs');
let team = [];
var newemployee = {};

function getEngineer() {
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
            type: "input",
            name: "github",
            message: "Github username: "
        },
    ]).then(function (answers) {
        newemployee = new Engineer(answers.name, answers.id, answers.email, "Engineer", answers.github);
        team.push(newemployee);
        repeatQuery();
    }).catch(function (error) {
        console.log(error);
    });
}

function getIntern() {
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
            type: "input",
            name: "school",
            message: "Enter school: "
        },
    ]).then(function (answers) {
        newemployee = new Intern(answers.name, answers.id, answers.email, "Intern", answers.school);
        team.push(newemployee);
        repeatQuery();
    }).catch(function (error) {
        console.log(error);
    });
}



function compilePage() {
    let htmldoc =
        `<!DOCTYPE html>
    <html lang="en">
    
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css"
            integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous">
        <title>YOUR TEAM</title>
        <style>
            .jumbotron {
                text-align: center;
            }
    
            img {
                box-shadow: 0px 0px 50px 30px;
                border-radius: 50%;
            }
    
            h1,
            p,
            h2,
            h3 {
                color: black;
            }
        </style>
    </head>
    
    <body>
        <div class="container">
            <div class="row">
                <div class="card" style="width: 18rem;">
                    <div class="card-header">
                        Manager: ${team[0].name}
                    </div>
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item">ID: ${team[0].id}</li>
                        <li class="list-group-item">Email: ${team[0].email}</li>
                        <li class="list-group-item">Role: ${team[0].role}</li>
                        <li class="list-group-item">Office: ${team[0].office}</li>
                    </ul>
                </div>
            </div>
        </div>


        <div class="container">
            <div class="row" id="engineerrow">

            </div>
        </div>
        <div class="container">
            <div class="row" id="internrow">

            </div>
        </div>
        <script src="https://code.jquery.com/jquery-3.4.1.slim.min.js"
            integrity="sha384-J6qa4849blE2+poT4WnyKhv5vZF5SrPo0iEjwBvKU7imGFAV0wwj1yYfoRSJoZ+n"
            crossorigin="anonymous"></script>
        <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js"
            integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo"
            crossorigin="anonymous"></script>
        <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js"
            integrity="sha384-wfSDF2E50Y2D1uUdj0O3uMBJnjuUD4Ih7YwaYd1iqfktj0Uod8GCExl3Og8ifwB6"
            crossorigin="anonymous"></script>
    </body>
    </html>`

    var i;
    for (i = 0; i < team.length; i++) {
        if (team[i] === "Engineer") {
            let engineercard =
                `<div class="card" style="width: 18rem;">
            <div class="card-header">
            Engineer: ${team[i].name}
            </div>
            <ul class="list-group list-group-flush">
            <li class="list-group-item">ID: ${team[i].id}</li>
            <li class="list-group-item">Email: ${team[i].email}</li>
            <li class="list-group-item">Role: ${team[i].role}</li>
            <li class="list-group-item">Office: ${team[i].office}</li>
            </ul>
            </div>`
            $("#engineerrow").append(engineercard)
        }
        else if (team[i].role === "Intern") {
            let interncard =
                `<div class="card" style="width: 18rem;">
            <div class="card-header">
            Intern: ${team[i].name}
            </div>
            <ul class="list-group list-group-flush">
            <li class="list-group-item">ID: ${team[i].id}</li>
            <li class="list-group-item">Email: ${team[i].email}</li>
            <li class="list-group-item">Role: ${team[i].role}</li>
            <li class="list-group-item">Office: ${team[i].office}</li>
            </ul>
            </div>`
            $("#internrow").append(interncard)
        }
    }
}

function printTeam() {
    fs.writeFile("./output/teamsheet.html", compilePage(), function (err) {
        if (err) {
            console.log(err);
        }
        console.log("Done!");
    })
}



function repeatQuery() {
    inquirer.prompt([
        {
            type: "list",
            message: "Would you like to add another?",
            name: "repeat",
            choices: [
                "Yes",
                "No",
            ]
        }
    ]).then(function (answers) {
        if (answers.repeat === "Yes") {
            getRole();
        }
        else if (answers.repeat === "No") {
            printTeam();
        }
    }).catch(function (error) {
        console.log(error);
    });
}

function getRole() {
    inquirer.prompt([
        {
            type: "list",
            message: "Which kind of employee are you adding?",
            name: "role",
            choices: [
                "Engineer",
                "Intern",
            ]
        }
    ]).then(function (answers) {
        if (answers.role === "Engineer") {
            getEngineer();
        }
        else if (answers.role === "Intern") {
            getIntern();
        }
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
        getRole();
    }).catch(function (error) {
        console.log(error);
    });
}


initMananger()

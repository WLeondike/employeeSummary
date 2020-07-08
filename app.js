//GLOBALS
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");
const empArr = [];
const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");
const render = require("./lib/htmlRenderer");



function letsGo() {
    inquirer.prompt([
        {
            type: "list",
            name: "empOption",
            message: "Please choose from the following the type of Employee you are:",
            choices: [
                "Manager",
                "Engineer",
                "Intern"
            ]
        }
    ]).then(answers => {
        
    });
};

function addManager() {
    inquirer.prompt([
        {
            type: "input",
            name: "mName",
            message: "Name of Manager?"
        },
        {
            type: "input",
            name: "mID",
            message: "Manager's ID?"
        },
        {
            type: "input",
            name: "mEmail",
            message: "Manager's email?"
        },
        {
            type: "input",
            name: "mOfficeNumber",
            message: "Office number for the Manager?"
        }
    ]).then(answers => {
        
    });
};
function addEngineer() {
    inquirer.prompt([
        {
            type: "input",
            name: "eName",
            message: "Name of Engineer"
        },
        {
            type: "input",
            name: "eID",
            message: "Engineer's ID?"
        },
        {
            type: "input",
            name: "eEmail",
            message: "Engineer's email?"
        },
        {
            type: "input",
            name: "eGitHub",
            message: "gitHub username for the Engineer?"
        }
    ]).then(answers => {
        
    });
};
function addIntern() {
    inquirer.prompt([
        {
            type: "input",
            name: "iName",
            message: "Name of Intern"
        },
        {
            type: "input",
            name: "iID",
            message: "Intern's ID?"
        },
        {
            type: "input",
            name: "iEmail",
            message: "Intern's email?"
        },
        {
            type: "input",
            name: "iSchool",
            message: "What school did the Intern graduate from?"
        }
    ]).then(answers => {
        
    });
};


// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)

// After the user has input all employees desired, call the `render` function (required
// above) and pass in an array containing all employee objects; the `render` function will
// generate and return a block of HTML including templated divs for each employee!

// After you have your html, you're now ready to create an HTML file using the HTML
// returned from the `render` function. Now write it to a file named `team.html` in the
// `output` folder. You can use the variable `outputPath` above target this location.
// Hint: you may need to check if the `output` folder exists and create it if it
// does not.

// HINT: each employee type (manager, engineer, or intern) has slightly different
// information; write your code to ask different questions via inquirer depending on
// employee type.

// HINT: make sure to build out your classes first! Remember that your Manager, Engineer,
// and Intern classes should all extend from a class named Employee; see the directions
// for further information. Be sure to test out each class and verify it generates an
// object with the correct structure and methods. This structure will be crucial in order
// for the provided `render` function to work! ```

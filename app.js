//sub classes
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
//dependencies
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");
//storing information
const empArr = [];
//creating the file
const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");
const render = require("./lib/htmlRenderer");
//only one manager input
let managerPresent = false;


//main function -- choosing employee to add
function addEmp() {
  inquirer
    .prompt([
      {
        type: "list",
        name: "empOption",
        message:
          "Please choose from the following the type of Employee you'd like to add:",
        choices: 
        [
            "Manager", 
            "Engineer", 
            "Intern", 
            "I'm finished"
        ]
      },
    ]).then((answers) => {
      if (answers.empOption === "Manager") {
        if (managerPresent === false) {
          managerPresent = true;
          addManager();
        } else {
          console.log("We already have records of a Manager, returning...");
          addEmp();
        }
      } else if (answers.empOption === "Engineer") {
        addEngineer();
      } else if (answers.empOption === "Intern") {
        addIntern();
      } else {
        // render(empArr)
        end();
      }
    });
}

//manager details
function addManager() {
  inquirer
    .prompt([
      {
        type: "input",
        name: "mName",
        message: "Name of Manager?",
      },
      {
        type: "input",
        name: "mID",
        message: "Manager's ID?",
      },
      {
        type: "input",
        name: "mEmail",
        message: "Manager's email?",
      },
      {
        type: "input",
        name: "mOfficeNumber",
        message: "Office number for the Manager?",
      },
    ]).then((answers) => {
        const m = new Manager (answers.mName, answers.mID, answers.mEmail, answers.mOfficeNumber);
        empArr.push(m);
        addEmp();
    });
}

//engineer details
function addEngineer() {
  inquirer
    .prompt([
      {
        type: "input",
        name: "eName",
        message: "Name of Engineer",
      },
      {
        type: "input",
        name: "eID",
        message: "Engineer's ID?",
      },
      {
        type: "input",
        name: "eEmail",
        message: "Engineer's email?",
      },
      {
        type: "input",
        name: "eGitHub",
        message: "gitHub username for the Engineer?",
      },
    ]).then((answers) => {
        const e = new Engineer (answers.eName, answers.eID, answers.eEmail, answers.eGitHub);
        empArr.push(e);
        addEmp();
    });
}

//intern details
function addIntern() {
  inquirer
    .prompt([
      {
        type: "input",
        name: "iName",
        message: "Name of Intern",
      },
      {
        type: "input",
        name: "iID",
        message: "Intern's ID?",
      },
      {
        type: "input",
        name: "iEmail",
        message: "Intern's email?",
      },
      {
        type: "input",
        name: "iSchool",
        message: "What school did the Intern graduate from?",
      },
    ]).then((answers) => {
        const i = new Intern (answers.iName, answers.iID, answers.iEmail, answers.iSchool);
        empArr.push(i);
        addEmp();
    });
}
addEmp();

//generate file
function end() {
  console.log("Employee Summary file created!");
  fs.writeFile(outputPath, render(empArr), (err) => {
    if (err) {
      return err;
    };
  });
}
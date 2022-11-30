// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");
const markdown = require("./utils/generateMarkdown");

// TODO: Create an array of questions for user input
const questions = [
  {
    type: "input",
    message: "What is the title of the project?",
    name: "Title",
  },
  {
    type: "input",
    message: "What is the description of the project?",
    name: "Description",
  },
  {
    type: "input",
    message: "What is the User Story/Usage?",
    name: "Usage",
  },
  {
    type: "input",
    message: "What necessary installations are required?",
    name: "Installation",
  },
  {
    type: "input",
    message: "What command should be run for testing?",
    name: "Test",
  },
  {
    type: "list",
    message: "What kind of license should your project have?",
    name: "license",
    choices: ["MIT", "APACHE 2.0", "GPL 3.0", "BSD 3", "None"],
  },
  {
    type: "input",
    message: "Are there any other contributors?",
    name: "Contributors",
  },
  {
    type: "input",
    message: "What is your github username?",
    name: "Username",
  },
  {
    type: "input",
    message: "What is your e-mail?",
    name: "email",
  },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, function(err) {
      console.log(fileName)
      console.log(data)
      if (err) {
          return console.log(err)
      }
      else {
          console.log("Success!")
      }
      })
}
// TODO: Create a function to initialize app
function init() {
  inquirer.prompt(questions)
      .then(function(data) {
          writeToFile("generatedReadME.md", markdown(data)); 
          console.log(data)

      })
}

// Function call to initialize app
init();
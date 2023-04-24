// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
// fs.writefile()
const generateMarkdown = require("./utils/generateMarkdown.js");

// TODO: Create an array of questions for user input

inquirer.prompt([
    {
      type: "input",
      message: "Please enter a title",
      name: "title",
    },
    {
      type: "input",
      message: "Please enter installation instructions",
      name: "installation",
    },
    {
      type: "input",
      message: "Please enter usage information",
      name: "usage",
    },
    {
      type: "list",
      message: "Please select license",
      name: "license",
      choices: ['MIT', 'ISC', 'APACHE'],
    },
    {
      type: "input",
      message: "Please enter contribution guidelines",
      name: "contributing",
    },
    {
      type: "input",
      message: "Please enter test instructions",
      name: "tests",
    },
    {
      type: "input",
      message: "Please enter your GitHub user name",
      name: "github",
    },
    {
      type: "input",
      message: "Please enter your email",
      name: "email",
    },
  ])
  .then((data) => {
    const response = data.name;
    console.log(data);
    
    fs.writeFile("README.md", generateMarkdown(response), (error) => {
      error ? console.log(error) : console.log("successfully wrote file");
    });
  });
  



// TODO: Create a function to write README file
// function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app

// function init() {
// }

// // Function call to initialize app
// init();

// inquirer.prompt(questions)
// .then((answers) => {
//     // Use user feedback for... whatever!!
//   })
//   .catch((error) => {
//     if (error.isTtyError) {
//       // Prompt couldn't be rendered in the current environment
//     } else {
//       // Something else went wrong
//     }
//   });

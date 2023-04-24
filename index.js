// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
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
    message: "Please enter a description",
    name: "description",
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
    console.log(data);
    
    fs.writeFile("README.md", generateMarkdown(data), (error) => {
      error ? console.log(error) : console.log("successfully wrote file");
    });
  });
  



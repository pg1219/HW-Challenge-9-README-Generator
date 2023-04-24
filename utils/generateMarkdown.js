// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title} 
  'https://img.shields.io/badge/License-${data.license}-blue.svg'

  ## ${data.description}
  
    ## Table of Contents
    
    - [Installation](#installation)
    - [Usage](#usage)
    - [License](#license)
    - [Contributing](#contributing)
    - [Tests](#tests)
    - [Questions](#questions)
  
   ### Installation
    ${data.installation}
  
  ### Usage
   ${data.usage}
  
  ### License
    ${data.license}
  
  ### Contributing
    ${data.contributing}
  
  ### Tests
    ${data.tests}
  
  ### Questions
    My GitHub username is ${data.github}

    I can be reached by email at ${data.email}
  

`;
}
// how to write markdown documentation

module.exports = generateMarkdown;
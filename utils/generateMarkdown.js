// modularized markdown function with string literal markdown template

function generateMarkdown(data) {
  return `# ${data.title} ![License](https://img.shields.io/badge/License-${data.license}-blue.svg)

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

    If you have any other questions I can be reached by email at ${data.email}
  

`;
}

module.exports = generateMarkdown;

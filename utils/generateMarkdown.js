function renderBadge(license) {
  if (license !== "None") {
    return `![GitHub license](https://img.shields.io/badge/license-${license}-blue.svg)`
  }
  return ''
}

// function to generate markdown for README
function generateMarkdown(response) {

  return `# ${response.title}
  ${renderBadge(response.license)}

  ## Description
  ${response.description}
  ![${response.alt}](${response.img})

  ## Table of Contents
  
  | [Installation](#installation) |
  | [Use](#use) |
  | [Contributors](#contributors) |
  | [Test Instructions](#test-instructions) |
  | [License Information](#license-information) |
  | [Questions](#questions) |
  | [Contact](#contact) |
    
  ## Installation
  The packages required to run this program are: ${response.installation}
  
  ## Use
  The intended use of the program is ${response.usage}
  
  ## Contributors
  [${response.contribution}](https://github.com/${response.contributorUser})
  
  ## Test Instructions
  ${response.test}
  
  ## License Information
  This is licensed under the ${response.license}
  
  ## Questions
  If you have any additional questions or concerns you can contact me at ${response.email}. You can find additional projects at [${response.username}](https://github.com/${response.username}). 

  `;
  
}


module.exports = generateMarkdown;

// function to generate markdown for README
function generateMarkdown(data) {

  return `# ${data.title}

  ## Description
  ${data.description}
  ![${data.alt}](${data.img})

  ## Table of Contents
  
  [Installation](#installation)
  [Use](#use)
  [Contributors](#contributors)
  [Test Instructions](#test-instructions)
  [License Information](#license-information)
  [Questions](#questions)
  [Contact](#contact)
    
  ## Installation
  The packages required to run this program are: ${data.installation}
  
  ## Use
  The intended use of the program is ${data.usage}
  
  ## Contributors
  [${data.contribution}](https://github.com/${data.contributorUser})
  
  ## Test Instructions
  ${data.test}
  
  ## License Information
  ${data.license}
  
  ## Questions
  If you have any additional questions or concerns you can contact me at ${data.email}. You can find additional projects at [${data.username}](https://github.com/${data.username}). 

  `;
  
}


module.exports = generateMarkdown;

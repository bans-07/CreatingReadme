// Function to generate markdown for README
function generateMarkdown(data) {
    return `# ${data.title}
  
    ![License](https://img.shields.io/badge/license-${data.license}-blue.svg)
  
    ## Description
    ${data.description}
  
    ## Table of Contents
    - [Installation](#installation)
    - [Usage](#usage)
    - [License](#license)
    - [Contributing](#contributing)
    - [Tests](#tests)
    - [Questions](#questions)
  
    ## Installation
    ${data.installation}
  
    ## Usage
    ${data.usage}
  
    ## License
    This project is licensed under the ${data.license} license.
  
    ## Contributing
    ${data.contributing}
  
    ## Tests
    ${data.tests}
  
    ## Questions
    If you have any questions, feel free to reach out:
    - GitHub: [${data.github}](https://github.com/${data.github})
    - Email: [${data.email}](mailto:${data.email})
  `;
  }
  
  // Export function
export default generateMarkdown;

// TODO: Include packages needed for this application
import { writeFile } from 'fs';
import { prompt } from 'inquirer';
import generateMarkdown from './generateMarkdown'; // Import function to format README

// TODO: Create an array of questions for user input
const questions = [
    {
        type:"input",
        usage:"title",
        message:"what is the title of your project",
    },
    {
        type: "input",
        name:"description",
        message: "Provode a short description of your project",
    },
    {
        type:"input",
        name: "installation",
        message:"How do you install your project",
    
    },
    {
        type:"input",
        name:"usage",
        message:"How do you use your project",
    },
    {
        type: 'list',
        name: 'license',
        message: 'Choose a license for your project:',
        choices: ['MIT', 'GPLv3', 'Apache 2.0', 'BSD 3-Clause', 'None'],
      },
      {
        type: 'input',
        name: 'contributing',
        message: 'How can others contribute to your project?',
      },
      {
        type: 'input',
        name: 'tests',
        message: 'How can users run tests on your project?',
      },
      {
        type: 'input',
        name: 'github',
        message: 'Enter your GitHub username:',
      },
      {
        type: 'input',
        name: 'email',
        message: 'Enter your email address:',
      },
    ];
// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    writeFile(fileName, data, (err) =>
      err ? console.log(err) : console.log('README.md generated successfully!')
    );
  }
  
// TODO: Create a function to initialize app
function init() {
    prompt(questions)
      .then((answers) => {
        const markdownContent = generateMarkdown(answers);
        writeToFile('README.md', markdownContent);
      })
      .catch((error) => console.log(error));
  }
  
// Function call to initialize app
init();

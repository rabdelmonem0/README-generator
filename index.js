// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const path = require('path');
const generateMarkdown = require('./utils/generateMarkdown')

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'Title',
        message: 'What is the title of your project?'
    },
    {
        type: 'input',
        name: 'Description',
        message: 'Write a description of your project:'
    },
    {
        type: 'input',
        name: 'Installation',
        message: 'What steps are required to install your project?'
    },
    {
        type: 'input',
        name: 'Usage',
        message: 'Please provide instructions and examples for use. Iclude screenshots if needed'
    },
    {
        type: 'input',
        name: 'Contribution',
        message: 'List all collaborators, if any:'
    },
    {
        type: 'input',
        name: 'Tests',
        message: 'Write tests for the application and examples of how to run them:'
    },
    {
        type: 'input',
        name: 'GithubURL',
        message: 'What is your Github URL?'
    },
    {
        type: 'input',
        name: 'Email',
        message: 'What is your email?'
    },
    {
        type: 'list',
        name: 'License',
        choices: ['MIT', 'Mozilla', 'Apache', 'None']
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
       return fs.writeFileSync(path.join(process.cwd(), fileName), data)     // requires path module
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then((answers)=> {
        console.log(answers)

        // call the writeToFile -> pass ite the filesname (README.md), answers)
        writeToFile("README.md", generateMarkdown(answers));
        console.log('File has been created!')
    })
}

// Function call to initialize app
init();

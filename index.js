const inquirer = require("inquirer");
const fs = require('fs');
const path = require("path");
const generateMarkdown = require("./utils/generateMarkdown");

function inputAnswers() {
  return inquirer.prompt([
    {
      type: "input",
      name: "title",
      message: "What is the title of your README?"
    },
    {
      type: "input",
      name: "description",
      message: "What is the description for your project?"
    },
    {
      type: "input",
      name: "installation",
      message: "What are the installation instructions",
      default: "npm i"
    },
    {
      type: "input",
      name: "usage",
      message: "What is the intended use for your project?"
    },
    {
      type: "input",
      name: "contribution",
      message: "Who are the collaborators on your project?"
    },
    {
      type: "input",
      name: "contributorUser",
      message: "What are the GitHub usernames of your collaborators?"
    },
    {
      type: "input",
      name: "test",
      message: "What are the test instructions?"
    },
    {
      type: "list",
      name: "license",
      message: "What kind of liscense do you have for your projects?",
      choices: ["none", "apache-2.0", "artistic-2.0", "ms-pl", "mit"]
    },
    {
      type: "input",
      name: "email",
      message: "What is your email?"
    },
    {
      type: "input",
      name: "username",
      message: "What is your GitHub username?"
    },
    {
      type: "input",
      name: "img",
      message: "What is the href for any images or gif you want to include? (example ./images/index.png)"
    },
    {
      type: "input",
      name: "alt",
      message: "What is the alt tag for your images or gif?"
    }
  ]);
}


// function to write README file
function writeToFile(fileName, resonse) {
  fs.writeFile(fileName, resonse, function(err) {
    if (err) {
      throw err;
    }
    console.log("Success!");
  });
}

// function to initialize program
async function init() {
  try {
    const answers = await inputAnswers();
    generateMarkdown(answers);
    writeToFile("README.md", generateMarkdown(answers)); 
  } catch(err) {
    console.log(err);
  }
}

// function call to initialize program
init();

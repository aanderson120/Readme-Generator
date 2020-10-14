const inquirer = require("inquirer");
const fs = require('fs');
const path = require("path");
const generateMarkdown = require("./utils/generateMarkdown");
// const Choice = require("inquirer/lib/objects/choice");
// const Choices = require("inquirer/lib/objects/choices");

const inputAnswers = [
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
      name: "username",
      message: "What is your GitHub username?"
    },
    {
      type: "input",
      name: "email",
      message: "What is your email?"
    }
  ];


// function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, function(err) {
    if (err) {
      return console.log(err);
    }
    console.log("Success!");
  });
}

// function to initialize program
function init() {
  inquirer.prompt(inputAnswers)
  .then((inquirerResponses) => {
    console.log("Generating README...");
    writeToFile("README.md", generateMarkdown({...inquirerResponses}));
  })
}

// function call to initialize program
init();

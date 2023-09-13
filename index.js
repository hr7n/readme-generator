const fs = require("fs");
const inquirer = require("inquirer");

const questions = [
  {
    type: "input",
    name: "title",
    message: "What is the project title?",
  },
  {
    type: "input",
    name: "description",
    message: "Enter a project description.",
  },
  {
    type: "input",
    name: "installation",
    message: "Enter installation instructions.",
  },
  {
    type: "input",
    name: "usage",
    message: "Enter usage information.",
  },
  {
    type: "input",
    name: "contribution",
    message: "Enter contribution guidelines, if available.",
  },
  {
    type: "input",
    name: "test",
    message: "Enter test instructions, if available.",
  },
  {
    type: "list",
    name: "license",
    message: ["MIT", "GPL", "Apache", "BSL", "None"],
  },
  {
    type: "input",
    name: "github",
    message: "Enter GitHub username.",
  },
  {
    type: "input",
    name: "email",
    message: "Enter email address.",
  },
];

createFile = (file, content) => {
  fs.writeFile(file, content, (err) =>
    err ? console.log(err) : console.log("File created!")
  );
};

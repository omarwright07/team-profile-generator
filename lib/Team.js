const inquirer = require('inquirer');
const Manager = require('./Manager');
const Engineer = require('./Engineer');
const Intern = require('./Intern');
const questions = require('./questions.js');
const { writeFile, copyFile } = require('../utils/generate-site.js');
const generateHTML = require('../src/page-template.js');


function Team() {
    this.employees = [];
}

// Starts the app
// Prompts questions about the Manager
Team.prototype.initializeTeam = function () {
    inquirer.prompt(questions.Manager)
        .then(answers => {
            // console.log(answers);
            this.employees.push(new Manager(
                answers.managerName,
                answers.managerId,
                answers.managerEmail,
                answers.managerOffice
            ));
            this.addTeamMember();
        })
        .catch((error) => {
            console.log(error);
        });
};

// Prompts questions to add an Engineer, Intern, or Finish the app
Team.prototype.addTeamMember = function () {
    // console.log(this.employees);
    inquirer.prompt(questions.Choice)
        .then(answer => {
            if (answer.choice == 'Engineer') {
                this.addEngineer();
                return;
            }
            else if (answer.choice == 'Intern') {
                this.addIntern();
                return;
            } else {
                this.generateSite();
            }
        });
};

// Prompts questions about the Engineer
Team.prototype.addEngineer = function () {
    inquirer.prompt(questions.Engineer)
        .then(answers => {
            // console.log(answers);
            this.employees.push(new Engineer(
                answers.engineerName,
                answers.engineerId,
                answers.engineerEmail,
                answers.engineerGitHub
            ));
            this.addTeamMember();
        });
};

// Prompts questions about the Intern
Team.prototype.addIntern = function () {
    inquirer.prompt(questions.Intern)
        .then(answers => {
            // console.log(answers);
            this.employees.push(new Intern(
                answers.internName,
                answers.internId,
                answers.internEmail,
                answers.internSchool
            ));
            this.addTeamMember();
        });
};

Team.prototype.generateSite = function () {
    let pageHTML = generateHTML(this.employees);
    writeFile('./dist/index.html', pageHTML);
    console.log('index.html created!');
    copyFile();
    console.log('style.css copied!');
};


module.exports = Team;
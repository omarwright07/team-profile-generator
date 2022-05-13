const inquirer = require('inquirer');
const fs = require('fs');
const Manager = require('./Manager');
const Engineer = require('./Engineer');
const Intern = require('./Intern');
const questions = require('./questions.js');
const generateHTML = require('../utils/generate-site.js');

function Team() {
    this.engineers = [];
    this.interns = [];
}

// Starts the app
// Prompts questions about the Manager
Team.prototype.initializeTeam = function () {
    inquirer.prompt(questions.Manager)
        .then(answers => {
            console.log(answers)
            this.addTeamMember();
        })
        .catch((error) => {
            console.log(error);
        });
};

// Prompts questions to add an Engineer, Intern, or Finish the app
Team.prototype.addTeamMember = function () {
    inquirer.prompt(questions.Choice)
        .then(answer => {
            if (answer.choice == 'Engineer') {
                this.addEngineer();
                return;
            }
            if (answer.choice == 'Intern') {
                this.addIntern();
                return;
            }
            // return generateHTML(answers);
        })
        .then(pageHTML => {
            writeToFile('./dist/index.html', pageHTML);
            console.log('index.html created!');
        });
};

// Prompts questions about the Engineer
Team.prototype.addEngineer = function () {
    inquirer.prompt(questions.Engineer)
        .then(answers => {
            console.log(answers);
            this.addTeamMember();
        });
};

// Prompts questions about the Manager
Team.prototype.addIntern = function () {
    inquirer.prompt(questions.Intern)
        .then(answers => {
            console.log(answers);
            this.addTeamMember();
        });
};


module.exports = Team;
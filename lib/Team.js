const inquirer = require('inquirer');
const fs = require('fs');
const Manager = require('./Manager');
const Engineer = require('./Engineer');
const Intern = require('./Intern');
const generateHTML = require('./utils/generateHTML.js');

function Team() {
    this.engineers = [];
    this.interns = [];
}

Team.prototype.initializeTeam = function() {
    
};

module.exports = Team;
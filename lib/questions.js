const questionsChoice = [
    {
        type: 'list',
        name: 'choice',
        message: 'Which employee would you like to add?',
        choices: [
            'Engineer',
            'Intern',
            'Or Finish Your Team'
        ]        
    }
];

const questionsManager = [
    {
        type: 'input',
        name: 'managerName',
        message: "What is your Manager's Name?",
        validate: input => {
            if (input) {
                return true;
            } else {
                console.log("Please enter Manager's Name!");
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'managerId',
        message: "What is your Manager's employee ID?",
        validate: input => {
            if (input) {
                return true;
            } else {
                console.log("Please enter Manager's employee ID!");
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'managerEmail',
        message: "What is your Manager's email address?",
        validate: input => {
            if (input) {
                return true;
            } else {
                console.log("Please enter Manager's email address!");
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'managerOffice',
        message: "What is your Manager's office number?",
        validate: input => {
            if (input) {
                return true;
            } else {
                console.log("Please enter Manager's office number!");
                return false;
            }
        }
    }
];

const questionsEngineer = [
    {
        type: 'input',
        name: 'engineerName',
        message: "What is your Engineer's Name?",
        validate: input => {
            if (input) {
                return true;
            } else {
                console.log("Please enter Engineer's Name!");
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'engineerId',
        message: "What is your Engineer's employee ID?",
        validate: input => {
            if (input) {
                return true;
            } else {
                console.log("Please enter Engineer's employee ID!");
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'engineerEmail',
        message: "What is your Engineer's email address?",
        validate: input => {
            if (input) {
                return true;
            } else {
                console.log("Please enter Engineer's email address!");
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'engineerOffice',
        message: "What is your Engineer's office number?",
        validate: input => {
            if (input) {
                return true;
            } else {
                console.log("Please enter Engineer's GitHub!");
                return false;
            }
        }
    }
];

const questionsIntern = [
    {
        type: 'input',
        name: 'internName',
        message: "What is your Intern's Name?",
        validate: input => {
            if (input) {
                return true;
            } else {
                console.log("Please enter Intern's Name!");
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'internId',
        message: "What is your Intern's employee ID?",
        validate: input => {
            if (input) {
                return true;
            } else {
                console.log("Please enter Intern's employee ID!");
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'internEmail',
        message: "What is your Intern's email address?",
        validate: input => {
            if (input) {
                return true;
            } else {
                console.log("Please enter Intern's email address!");
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'internOffice',
        message: "What is your Intern's office number?",
        validate: input => {
            if (input) {
                return true;
            } else {
                console.log("Please enter Intern's GitHub!");
                return false;
            }
        }
    }
];

module.exports = ;
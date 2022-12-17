const inquirer = require('inquirer');
const fs = require('fs');

console.log('Get ready to build your team!');
//prompt list for input
inquirer
.prompt([
    {type: 'input',
    name: 'managerName',
    message: 'Whats the name of the Manger?'
    },
    {type: 'input',
    name: 'managerId',
    message: 'Whats Mangers ID number?'
    },
    {type: 'input',
    name: 'managerEmail',
    message: 'Whats Mangers email?'
    },
    {type: 'input',
    name: 'managerOfficeNumber',
    message: 'Whats Mangers office number?'
    },
    {type: 'list',
    message: 'What typoe of member to add?',
    name: 'members',
    choices: ['Engineer', 'Intern', 'Done']
    },
])
//save anwsers for use in html.
.then((anwers) => {
    const memberAnswer = []
    memberAnswer.push(answers)
        console.log(memberAnswer)

        if (anwers.members === "Engineer"){
            inquirer
            .prompt([
                {
                    tyype: 'input',
                    name: 'engName',
                    message: 'Engineers Name?'
                },
                {
                    tyype: 'input',
                    name: 'engId',
                    message: 'Engineers Id number?'
                },
                {
                    tyype: 'input',
                    name: 'engEmail',
                    message: 'Engineers Email?'
                },
                {
                    tyype: 'input',
                    name: 'engGithub',
                    message: 'Engineers Github?'
                },
            ])
            .then(callback(members))
            memberAnswer.push(answers)
            console.log(memberAnswers)
        }
         else if (anwers.members === 'Intern') {
            inquirer
            .prompt([
                {
                    type: 'input',
                    name: 'interName',
                    message: 'What is the interns name?'
                },
                {
                    type: 'input',
                    name: 'interId',
                    message: 'What is the interns Id number?'
                },
                {
                    type: 'input',
                    name: 'interEmail',
                    message: 'What is the interns email?'
                },
                {
                    type: 'input',
                    name: 'interSchool',
                    message: 'What school does the intern attend?'
                },
            ])
            .then(callback(members))
            memberAnswer.push(answers)
            console.log(memberAnswer)
         }
         else {
            fs.writeFile('./dist/team.html', memberAnswer, (err) =>
            err ? console.log(err) : console.log('Profiles have been made for your team!')
            ) 
        }
    });
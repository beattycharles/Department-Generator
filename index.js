const inquirer = require('inquirer');
const fs = require('fs');
let employeeInfo = [];

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
])

.then((responce) => {
    const managerAnswer = []
    managerAnswer.push(responce)
        console.log(managerAnswer)
        addMember();
});
//function for  adding Member
        function addMember(){
            inquirer
            .prompt([
        {type: 'list',
    message: 'What typoe of member to add?',
    name: 'members',
    choices: ['Engineer', 'Intern', 'Done'],
            }
        ])
    
    .then((anwsers) =>{
    if(anwsers.members === 'Engineer') {
        engineerPrompts();
    } else if (anwsers.members === 'Intern') {
        internPrompt();
    } else {
        genHtml();
        return
    }
        })
    };
    
// add engineer
    function engineerPrompts() {
            inquirer
            .prompt([
                {
                    type: 'input',
                    name: 'engName',
                    message: 'Engineers Name?'
                },
                {
                    type: 'input',
                    name: 'engId',
                    message: 'Engineers Id number?'
                },
                {
                    type: 'input',
                    name: 'engEmail',
                    message: 'Engineers Email?'
                },
                {
                    type: 'input',
                    name: 'engGithub',
                    message: 'Engineers Github?'
                },
            ])
            .then((anwsers) => {
                let engInfo = new Engineer(anwsers.engName, anwsers.engId, anwsers.engEmail, anwsers.engGithub)
                employeeInfo.push(engInfo)
                addMember();
            }
            )};

//add intern
        function internPrompt() {
        inquirer
            .prompt([
            {
            type: "input",
            name: "internName",
            message: "What is the interns name?",
            },
            {
            type: "input",
            name: "internId",
            message: "What is the interns Id number?",
            },
            {
            type: "input",
            name: "internEmail",
            message: "What is the interns email?",
            },
            {
            type: "input",
            name: "internSchool",
            message: "What school does the intern attend?",
            },
            ])
            .then((anwsers) => {
                let internInfo = new Inter(anwsers.internName, anwsers.internId, anwsers.internEmail, anwsers.internSchool)
                employeeInfo.push(internInfo)
                addMember();
            })};
        
    // when done adding members make hmtl file
        function genHtml(){
            const html = gererateHtml(employeeInfo);
           fs.writeFile('./dist/team.html', html, (err) =>
           err ? console.log(err) : console.log('Profiles have been made for your team!')
           )};
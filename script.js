const inquirer = require('inquirer');
const fs = require('fs');
const util = require('util');

const writeFileAsync = util.promisify(fs.writeFile);

const promptUser=()=>
    inquirer.prompt([
        {
            type:'input',
            name:'title',
            message:'Enter your project title:',
        },
        {
            type:'input',
            name:'description',
            message:'Enter a description of your project:',
        },
        {
            type:'input',
            name:'installation',
            message:'Enter the commands neccesary to install to required packages:',
        },
        {
            type:'input',
            name:'usage',
            message:'What is your project used for? :',
        },
        {
            type:'input',
            name:'License',
            message:'What type of license? :'
        },
    ]).then((answers) => console.log(answers));

    promptUser();
const inquirer = require('inquirer');
const fs = require('fs');
const util = require('util');

const writeFileAsync = util.promisify(fs.writeFile);

const promptUser= () =>
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
            name:'credits',
            message:'Who worked on this project?:',
        },
        {
            type:'input',
            name:'license',
            message:'What type of license? :'
        },
    ]);

    const genReadme = (answers) => 
        `# ${answers.title}

        ## Description
        
        ${answers.description}
        
        ## Table of Contents
        
        - [Installation](#installation)
        - [Usage](#usage)
        - [Credits](#credits)
        - [License](#license)
        
        ## Installation
        
        Run function ``${answers.installation}`` to install the neccesary packages for this repository.
        
        ## Usage
        
        ${answers.usage}
        
        ## Credits
        
        ${answers.credits}
        
        ## License
        
        ${answers.license}`

    promptUser()
        .then((answers) => console.log(answers));
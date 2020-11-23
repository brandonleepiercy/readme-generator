const inquirer = require('inquirer');
const fs = require('fs');
const util = require('util');

const writeFileAsync = util.promisify(fs.writeFile);

const promptUser= () =>
    inquirer.prompt([
        {
            type:'input',
            name:'title',
            message:'Enter the project title:',
        },
        {
            type:'input',
            name:'description',
            message:'Enter a description of the project:',
        },
        {
            type:'input',
            name:'installation',
            message:'Enter the commands neccesary to install to required packages:',
        },
        {
            type:'input',
            name:'usage',
            message:'What is the project used for? :',
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
        {
            type:'input',
            name:'tests',
            message:'Describe any tests written for this application: '
        },
        {
            type:'input',
            name:'email',
            message:'Enter your email: '
        },
        {
            type:'input',
            name:'username',
            message:'Enter your Github username: '
        }
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
- [Tests](#tests)
- [Questions](#questions)

## Installation

Type "${answers.installation}" into CMD to install the neccesary packages for this repository.

## Usage

${answers.usage}

## Credits

${answers.credits}

## License

${answers.license}

## Tests

${answers.tests}

## Questions

You can contact me at ${answers.email} in case you have any questions or concerns about this repository.
You may also reach me or browse my other repositories at my [Github Profile](https://github.com/${answers.username})`

    promptUser()
        .then((answers) => writeFileAsync('README.md', genReadme(answers)))
        .then(() => console.log('Successfully wrote to index.html'))
        .catch((err) => console.error(err));
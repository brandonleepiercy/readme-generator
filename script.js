const inquirer = require('inquirer');
const fs = require('fs');
const util = require('util');
const badges = {
    MIT:"[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)",
    GPLv2:"[![License: GPL v2](https://img.shields.io/badge/License-GPL%20v2-blue.svg)](https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html)",
    Apache:"[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)",
    GPLv3:"[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)",
    BSD3clause:"[![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)",
    BSD2clause:"[![License](https://img.shields.io/badge/License-BSD%202--Clause-orange.svg)](https://opensource.org/licenses/BSD-2-Clause)",
    LGPLv3:"[![License: LGPL v3](https://img.shields.io/badge/License-LGPL%20v3-blue.svg)](https://www.gnu.org/licenses/lgpl-3.0)",
    AGPLv3:"[![License: AGPL v3](https://img.shields.io/badge/License-AGPL%20v3-blue.svg)](https://www.gnu.org/licenses/agpl-3.0)"
}

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
            type:'list',
            name:'license',
            message:'What type of license? :',
            choices:['MIT','GPLv2','Apache','GPLv3','BSD3clause', 'BSD2clause', 'LGPLv3', 'AGPLv3']
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

const genReadme = (answers) => `
# ${answers.title}
${badges[answers.license]}
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
You may also reach me or browse my other repositories at my [Github Profile](https://github.com/${answers.username})
`


promptUser()
    .then((answers) => writeFileAsync('./output/README.md', genReadme(answers)))
    .then(() => console.log('Successfully wrote README.md'))
    .catch((err) => console.error(err));
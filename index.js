const inquirer = require('inquirer');
const fs = require('fs');

inquirer.prompt([
    {
        type: 'input',
        name: 'text',
        message: 'Please enter your logo text in three letters or less.',
        validate: (input) => {
            if ((input) && (input.length <= 3)) {
                return true;
            } else {
                console.log('Invalid input. Please enter your logo text in three letters or less.');
                return false;
            }
        },
    },
    {
        type: 'input',
        name: 'textColor',
        message: 'Please enter your desired text color, either a color keyword or a hexadecimal number',
        validate: (input) => {
            if (input) {
                return true;
            } else {
                console.log('Invalid input. Please enter your desired text color, either a color keyword or a hexadecimal number');
                return false;
            }
        }
    }
])
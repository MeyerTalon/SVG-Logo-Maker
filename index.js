const inquirer = require('inquirer');
const fs = require('fs');
const Circle = require('./lib/circle.js');
const Square = require('./lib/square.js');
const Triangle = require('./lib/triangle.js');


const writeSVGFile = (data) => {

    if (data.shape === 'Circle') {
        const myShape = new Circle(data.color, data.text, data.textColor);
    } else if (data.shape === 'Square') {
        const myShape = new Square(data.color, data.text, data.textColor);
    } else {
        const myShape = new Triangle(data.color, data.text, data.textColor)
    }

    fs.writeFile('logo.svg', myShape.render(), (err) => {
        if (err) {
            console.log(err);
        } else {
            console.log("Generated logo.svg");
        }
    });
}

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
        },
    },
    {
        type: 'list',
        name: 'shape',
        message: 'Please pick the shape of your logo.',
        choices: ['Circle', 'Square', 'Trianlge'],
    },
    {
        type: 'input',
        name: 'color',
        message: 'Please enter your desired shape color, either a color keyword or a hexadecimal number.',
        validate: (input) => {
            if (input) {
                return true;
            } else {
                console.log('Invalid input. Please enter your desired shape color, either a color keyword or a hexadecimal number');
                return false;
            }
        },
    }
]).then(writeSVGFile);
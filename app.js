const inquirer = require('inquirer');
const fs = require('fs');

function promptUser() {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'text',
            message: 'Enter up to three characters for the logo:',
            validate: input => {
                return input.length <= 3 || 'Text should be up to 3 characters long';
            }
        },
        {
            type: 'input',
            name: 'textColor',
            message: 'Enter the color for the text:',
            validate: input => {
                const isValidColor = /^#?[0-9A-Fa-f]{6}$/.test(input) || /^[a-zA-Z]+$/.test(input);
                return isValidColor || 'Please enter a valid color keyword or a hexadecimal number';
            }
        },
        {
            type: 'list',
            name: 'shape',
            message: 'Choose a shape:',
            choices: ['circle', 'triangle', 'square']
        },
        {
            type: 'input',
            name: 'shapeColor',
            message: 'Enter the color for the shape:',
            validate: input => {
                const isValidColor = /^#?[0-9A-Fa-f]{6}$/.test(input) || /^[a-zA-Z]+$/.test(input);
                return isValidColor || 'Please enter a valid color keyword or a hexadecimal number';
            }
        }
    ]);
}

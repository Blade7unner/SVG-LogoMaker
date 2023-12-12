import inquirer from 'inquirer';
import { writeFile } from 'fs/promises';


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

function createSvg({ text, textColor, shape, shapeColor }) {
    let svgString = '<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">';

    if (shape === 'circle') {
        svgString += `<circle cx="150" cy="100" r="80" fill="${shapeColor}" />`;
    } else if (shape === 'triangle') {
        svgString += `<polygon points="150,20 230,180 70,180" fill="${shapeColor}" />`;
    } else if (shape === 'square') {
        svgString += `<rect x="70" y="60" width="160" height="160" fill="${shapeColor}" />`;
    }

    svgString += `<text x="150" y="125" font-size="60" text-anchor="middle" fill="${textColor}">${text}</text>`;
    svgString += '</svg>';

    return svgString;
}

function main() {
    promptUser().then(answers => {
        const svgContent = createSvg(answers);
        fs.writeFileSync('logo.svg', svgContent);
        console.log('Generated logo.svg');
    });
}

main();
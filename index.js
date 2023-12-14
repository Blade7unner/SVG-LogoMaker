import inquirer from 'inquirer';
import { writeFile } from 'fs/promises';
import { Circle, Triangle, Square } from './lib/shapes.js';

async function promptUser() {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'text',
            message: 'Enter up to three characters for the logo:',
            validate: input => input.length <= 3 || 'Text should be up to 3 characters long'
        },
        {
            type: 'input',
            name: 'textColor',
            message: 'Enter the color for the text:',
            validate: input => /^#?[0-9A-Fa-f]{6}$/.test(input) || /^[a-zA-Z]+$/.test(input) || 'Please enter a valid color keyword or a hexadecimal number'
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
            validate: input => /^#?[0-9A-Fa-f]{6}$/.test(input) || /^[a-zA-Z]+$/.test(input) || 'Please enter a valid color keyword or a hexadecimal number'
        }
    ]);
}

function createSvg({ text, textColor, shape, shapeColor }) {
    let shapeSvg;
    switch (shape) {
        case 'circle':
            shapeSvg = new Circle(shapeColor).render();
            break;
        case 'triangle':
            shapeSvg = new Triangle(shapeColor).render();
            break;
        case 'square':
            shapeSvg = new Square(shapeColor).render();
            break;
    }
    return `<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">${shapeSvg}<text x="150" y="125" font-size="60" text-anchor="middle" fill="${textColor}">${text}</text></svg>`;
}

async function main() {
    const answers = await promptUser();
    const svgContent = createSvg(answers);
    await writeFile('logo.svg', svgContent);
    console.log('Generated logo.svg');
}

main();


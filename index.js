const {Triangle, Circle, Square} = require('./lib/shapes.js');
const inquirer = require('inquirer');
const fs =require('fs');

inquirer.prompt([{
    type: 'input',
    message: 'Input 3 alphabetical characters for your logo.',
    name: 'text',
},
{
    type: 'list',
    message: 'What color would you like the text?',
    name: 'textColor',
    choices: ['White', 'Black', 'Gray'],
},
{
    type: 'list',
    message: 'What shape would you like your logo?',
    name: 'shape',
    choices: ['Triangle' , 'Square', 'Circle'],
},
{
    type: 'list',
    message: 'What color would you like your shape to be?',
    name: 'shapeColor',
    choices: ['Red', 'Blue', 'Yellow']
},
])
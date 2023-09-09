// npm and node packages
const inquirer = require('inquirer');
const fs = require('fs');

// Objects

const inqPrompts = [
    {
        type: 'input',
        message: 'Enter up to THREE CHARACTERS for the logo',
        name: 'text'
    },
    {
        type: 'input',
        message: 'Enter a COLOR (or HEX CODE) for the logo\'s TEXT',
        name: 'textColor'
    },
    {
        type: 'list',
        message: 'Choose a SHAPE.',
        choices: ['circle', 'triangle', 'square'],
        name: 'shape'
    },
    {
        type: 'input',
        message: 'Enter a COLOR (or HEX CODE) for the logo\'s SHAPE',
        name: 'shapeColor'
    },
];

const writeLogo = (data) => {
    fs.writeFile('logo.svg', data, (err) =>{
        if (err) {
            console.log(err);
        }
        else {
            console.log('Generated logo.svg');
        }
    });
}

const init = () => {
    inquirer
        .prompt([
            inqPrompts[0],
            inqPrompts[1],
            inqPrompts[2],
            inqPrompts[3],
        ])
        .then((res)=>{
            console.log(res);
        });
}

init();
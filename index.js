const inquirer = require('inquirer');
const fs = require('fs');

const inqPrompts = [
    {
        type: 'input',
        message: 'Enter up to THREE CHARACTERS for the logo',
        name: 'logoText'
    },
    {
        type: 'input',
        message: 'Enter a COLOR (or HEX CODE) for the logo\'s TEXT',
        name: 'color'
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
        name: 'color'
    },
];

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
// npm and node packages
const inquirer = require('inquirer');
const fs = require('fs');
const { Square, Circle, Triangle } = require('./lib/shapes');

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

const writeToFile = (data) => {
    fs.writeFile('./examples/logo.svg', data, (err) =>{
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
        .prompt(inqPrompts)
        .then((res) => {
            switch (res.shape) {
                case 'square':
                    const square =  new Square(res.text, res.textColor, res.shapeColor);
                    writeToFile(square.create());
                    break;
                case 'circle':
                    const circle = new Circle(res.text, res.textColor, res.shapeColor);
                    writeToFile(circle.create());
                    break;
                case 'triangle':
                    const triangle = new Triangle(res.text, res.textColor, res.shapeColor);
                    writeToFile(triangle.create());
                    break;
            };
        });
};

init();
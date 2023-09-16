// npm and node packages
const inquirer = require('inquirer');
const fs = require('fs');
const { Square, Circle, Triangle } = require('./lib/shapes');

// Color validator
const colorVal = (input) => {
    // hexcode or color regular expression
    const colorRegex = /^(#[0-9A-Fa-f]{3,6}|[a-zA-Z]+)$/;
    
    if(colorRegex.test(input)) {
        return true;
    }
    else {
        return 'Enter a valid COLOR or HEX CODE.'
    }
}


// prompts
const inqPrompts = [
    {
        type: 'input',
        message: 'Enter up to THREE CHARACTERS for the logo',
        name: 'text',
        validate: (input) => {
            text = /^.{1,3}$/

            if(text.test(input)) {
                return true;
            }
            else {
                return 'Enter ONLY up to THREE CHARACTERS!!!!!!!!!'
            }
        }
    },
    {
        type: 'input',
        message: 'Enter a COLOR (or HEX CODE) for the logo\'s TEXT',
        name: 'textColor',
        validate: colorVal
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
        name: 'shapeColor',
        validate: colorVal
    }
];



// Writes file
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


// main
const init = () => {
    inquirer
        .prompt(inqPrompts)
        .then((res) => {
            // text color
            let textColor = '';
            if(res.textColor.includes('#')) {
                textColor = res.textColor;
            }
            else {
                textColor = res.textColor.toLowerCase();
            }
            
            // shape color
            let shapeColor = '';
            if(res.shapeColor.includes('#')) {
                shapeColor = res.shapeColor;
            }
            else {
                shapeColor = res.shapeColor.toLowerCase();
            }

            switch (res.shape) {
                case 'square':
                    const square =  new Square(res.text, textColor, shapeColor);
                    writeToFile(square.render());
                    break;
                case 'circle':
                    const circle = new Circle(res.text, textColor, shapeColor);
                    writeToFile(circle.render());
                    break;
                case 'triangle':
                    const triangle = new Triangle(res.text, textColor, shapeColor);
                    writeToFile(triangle.render());
                    break;
            };
        });
};

init();
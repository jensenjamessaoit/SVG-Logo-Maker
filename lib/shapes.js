class Shape {
    constructor(text, textColor, shapeColor){
        this.text = text;
        this.textColor = textColor;
        this.shapeColor = shapeColor;
    }
}

class Square extends Shape {
    render() {
        return `<svg width="100" height="100" xmlns="http://www.w3.org/2000/svg">

        <rect x="18" y="24" width="64" height="64" fill="${this.shapeColor}"/>
        
        <text fill="${this.textColor}" font-weight="900" font-family="serif" x="50%" y="60%" text-anchor="middle">${this.text}</text>
        
        </svg>`;
    }
}

class Circle extends Shape{
    render() {
        return `<svg width="100" height="100" xmlns="http://www.w3.org/2000/svg">

        <circle cx="50" cy="50" r="36" fill="${this.shapeColor}" />
        
        <text fill="${this.textColor}" font-weight="900" font-family="serif" x="50%" y="50%" text-anchor="middle" dominant-baseline="middle">${this.text}</text>
        
        </svg>`;
    }
}

class Triangle extends Shape {
    render() {
        return `<svg width="100" height="100" xmlns="http://www.w3.org/2000/svg">

        <polygon points="50,15 5,90 95,90" fill="${this.shapeColor}"/>
        
        <text fill="${this.textColor}" font-weight="900" font-family="serif" x="50%" y="60%" text-anchor="middle" dominant-baseline="middle">${this.text}</text>
        
        </svg>`;
    }
}

module.exports = {
    Square,
    Circle,
    Triangle,
};
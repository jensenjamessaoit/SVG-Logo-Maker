const { Square, Circle, Triangle } = require('./shapes.js');

describe('Shape', () =>{
    // shape color
    describe('Color', () => {
        // triangle 
        it('should have "blue" inside the "fill" attribute for the triangle', () => {
            const triangle = new Triangle('SVG', 'red', 'blue');
            expect(triangle.render()).toContain('<polygon points="50,15 5,90 95,90" fill="blue"/>');
        });
        // square 
        it('should have "blue" inside the "fill" attribute for the square', () => {
            const square = new Square('SVG', 'red', 'blue');
            expect(square.render()).toContain('<rect x="18" y="24" width="64" height="64" fill="blue"/>');
        });
        // circle
        it('should have "blue" inside the "fill" attribute for the circle', () => {
            const circle = new Circle('SVG', 'red', 'blue');
            expect(circle.render()).toContain('<circle cx="50" cy="50" r="36" fill="blue" />');
        });
    });

    // shape text and text color
    describe('Text and Text Color', ()=> {
        // triangle 
        it('should have "SVG" for the text inside field and "red" inside the fill attribute for the triangle', () => {
            const triangle = new Triangle('SVG', 'red', 'blue');
            expect(triangle.render()).toContain('<text fill="red" font-weight="900" font-family="serif" x="50%" y="60%" text-anchor="middle" dominant-baseline="middle">SVG</text>');
        });
        // square
        it('should have "SVG" for the text inside field and "red" inside the fill attribute for the square', () => {
            const square = new Square('SVG', 'red', 'blue');
            expect(square.render()).toContain('<text fill="red" font-weight="900" font-family="serif" x="50%" y="60%" text-anchor="middle">SVG</text>');
        });
        // circle
        it('should have "SVG" for the text inside field and "red" inside the fill attribute for the circle', () => {
            const circle = new Circle('SVG', 'red', 'blue');
            expect(circle.render()).toContain('<text fill="red" font-weight="900" font-family="serif" x="50%" y="50%" text-anchor="middle" dominant-baseline="middle">SVG</text>');
        });
    });
});
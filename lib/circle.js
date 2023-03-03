const Shape = require('./shape.js');

class Circle extends Shape {

    // Constructor using parent class vars
    constructor(color, text, textColor) {
        super(color, text, textColor);
    }

    // Will render the text needed to create a circle SVG logo in a .svg file
    render() {
        return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
    <circle cx="150" cy="100" r="80" fill="${this.color}"/>
    <text x="150" y="110" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text>   
</svg>`;
    }

}

// Exports the class
module.exports = Circle;
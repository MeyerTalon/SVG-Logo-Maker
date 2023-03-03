const Shape = require('./shape.js');

class Triangle extends Shape {

    // Constructor using parent class vars
    constructor(color, text, textColor) {
        super(color, text, textColor);
    }

    // Will render the text needed to create a circle SVG logo in a .svg file
    render() {
        return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
    <polygon points="0 200, 150 0, 300 200" fill="${this.color}"/>
    <text x="150" y="150" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text>
</svg>`;
    }

}

// Exports the class
module.exports = Triangle;
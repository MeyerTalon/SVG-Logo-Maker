const Shape = require('./shape.js');

class Square extends Shape {

    constructor(color, text, textColor) {
        super(color, text, textColor);
    }

    render() {
        return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
    <rect width="150" height="150" fill="${this.color}"/>
    <text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text>
</svg>`;
    }

}

module.exports = Square;
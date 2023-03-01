class Shape {
    constructor (color, text, textColor) {
        this.color = color;
        this.text = text;
        this.textColor = textColor;
    }

    render() {
        throw new Error('Child class must implement a render() method.');
    }
}

module.exports = Shape;
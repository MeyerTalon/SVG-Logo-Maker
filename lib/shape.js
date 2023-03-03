// Parent class to other shape classes with necesary vars and constructor
class Shape {

    // Constructor with all necesary vars
    constructor (color, text, textColor) {
        this.color = color;
        this.text = text;
        this.textColor = textColor;
    }

    // Will be completed in each child shape class
    render() {
        throw new Error('Child class must implement a render() method.');
    }

    // Setter methods
    setColor(newColor) {
        this.color = newColor;
    }
    setText(newText) {
        this.text = newText;
    }
    setColor(newTextColor) {
        this.textColor = newTextColor;
    }

    // Getter methods
    getColor() {
        return this.color;
    }
    getText() {
        return this.text;
    }
    getColor() {
        return this.textColor;
    }
}

// Exports the class
module.exports = Shape;
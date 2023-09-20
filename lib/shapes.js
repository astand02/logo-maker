class Shape {
  constructor(text, textColor, shape, shapeColor) {
    this.text = text;
    this.textColor = textColor;
    this.shape = shape;
    this.shapeColor = shapeColor;
  };
  render() {
    return ""
  };
}

class Circle extends Shape {
  constructor(text, textColor, shapeColor) {
    super(text, textColor, shapeColor);
  }
  render() {
    return `<circle cx="150" cy="100" r="80" fill="${this.shapeColor}"/><text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text>`
  };
}

class Triangle extends Shape {
  constructor(text, textColor, shapeColor) {
    super(text, textColor, shapeColor);
  };
  render() {
    return `<polygon width="300" height="200" points="150, 18 244, 182 56, 182" fill="${this.shapeColor}"/><text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text>`
  };
}

class Square extends Shape {
  constructor(text, textColor, shapeColor) {
    super(text, textColor, shapeColor);
  };
  render() {
    return `<rect x="10" y="10" width="300" height="200" stroke="black" fill="${this.shapeColor}" stroke-width="5"/><text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text>`
  };
}

module.exports = { Circle, Triangle, Square } 

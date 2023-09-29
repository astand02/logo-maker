const { Circle, Triangle, Square } = require("./shapes.js")

describe('Circle', () => {
  test('should render users personalized Circle logo.', () => {
      const circle = new Circle();
      expect(circle.render()).toEqual(`<circle cx="150" cy="100" r="80" fill="${this.shapeColor}"/><text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text>`
      );
  });
});

describe('Triangle', () => {
    test('should render users personalized Triangle logo.', () => {
      const triangle = new Triangle();
      expect(triangle.render()).toEqual(`<polygon width="300" height="200" points="150, 18 244, 182 56, 182" fill="${this.shapeColor}"z/><text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text>`
      );
    });
  });

  describe('Square', () => {
    test('should render users personalized Square logo.', () => {
      const square = new Square();
      expect(square.render()).toEqual(`<rect x="10" y="10" width="300" height="200" stroke="black" fill="${this.shapeColor}" stroke-width="5"/><text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text>`
      );
    });
  });


    
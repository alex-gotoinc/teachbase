// prototypes for constructors
const rectangleProto = {
  getPerimeter: function () {
    return (this.w + this.h) * 2;
  },

  getSquare: function () {
    return this.w * this.h;
  }
};

function Rectangle(width, height) {
  this.w = width;
  this.h = height;
}
Rectangle.prototype = rectangleProto;

function Square(z) {
  this.w = z;
  this.h = z;
}

// set prototype chain
Square.prototype = Rectangle.prototype;

const rectangle = new Rectangle(10, 20);
const square = new Square(5);

console.log('rectangle', rectangle, Object.getPrototypeOf(rectangle));
console.log('square', square, Object.getPrototypeOf(square));

console.log(rectangle.getPerimeter());
console.log(rectangle.getSquare());

console.log(square.getPerimeter());
console.log(square.getSquare());

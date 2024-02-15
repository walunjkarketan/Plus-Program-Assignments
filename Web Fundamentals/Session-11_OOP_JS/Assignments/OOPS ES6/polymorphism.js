// Shape class
class Shape {
    calculateArea() {
      console.log("Calculating area for a generic shape.");
    }
  }
  
  // Rectangle class extends Shape
  class Rectangle extends Shape {
    constructor(width, height) {
      super();
      this.width = width;
      this.height = height;
    }
  
    calculateArea() {
      console.log(`Area of Rectangle: ${this.width * this.height}`);
    }
  }
  
  // Triangle class extends Shape
  class Triangle extends Shape {
    constructor(base, height) {
      super();
      this.base = base;
      this.height = height;
    }
  
    calculateArea() {
      console.log(`Area of Triangle: ${(this.base * this.height) / 2}`);
    }
  }
  
  // Circle class extends Shape
  class Circle extends Shape {
    constructor(radius) {
      super();
      this.radius = radius;
    }
  
    calculateArea() {
      console.log(`Area of Circle: ${Math.PI * this.radius * this.radius}`);
    }
  }
  
  // Instances and method calls
  const rectangle = new Rectangle(5, 10);
  const triangle = new Triangle(3, 8);
  const circle = new Circle(4);
  
  rectangle.calculateArea(); // Area of Rectangle: 50
  triangle.calculateArea();  // Area of Triangle: 12
  circle.calculateArea();    // Area of Circle: 50.26548245743669
    
class Shape {
    constructor(color) {
      this.color = color;
    }
  
    setColor(color) {
      this.color = color;
    }
  
    render() {
      throw new Error('render method must be implemented in derived class');
    }
  }
  
  class Circle extends Shape {
    render() {
      return `<circle cx="50" cy="50" r="40" fill="${this.color}" />`;
    }
  }
  
  class Triangle extends Shape {
    render() {
      return `<polygon points="25,15 75,15 50,65" fill="${this.color}" />`;
    }
  }
  
  class Square extends Shape {
    render() {
      return `<rect x="10" y="10" width="70" height="70" fill="${this.color}" />`;
    }
  }
  
  module.exports = { Shape, Circle, Triangle, Square };
  
  
  
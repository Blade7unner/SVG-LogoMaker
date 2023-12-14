export class Circle {
    constructor(color) {
        this.color = color;
    }

    setColor(color) {
        this.color = color;
    }

    render() {
        return `<circle cx="150" cy="100" r="40" fill="${this.color}" />`;
    }
}

export class Triangle {
    constructor(color) {
        this.color = color;
    }

    setColor(color) {
        this.color = color;
    }

    render() {
        return `<polygon points="150, 18 244, 182 56, 182" fill="${this.color}" />`;
    }
}

export class Square {
    constructor(color) {
        this.color = color;
    }

    setColor(color) {
        this.color = color;
    }

    render() {
        return `<rect x="110" y="60" width="80" height="80" fill="${this.color}" />`;
    }
}




  
  
  
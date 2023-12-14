export class Circle {
    constructor(color) {
        this.color = color;
    }

    render() {
        return `<circle cx="50" cy="50" r="40" fill="${this.color}" />`;
    }
}

export class Triangle {
    constructor(color) {
        this.color = color;
    }

    render() {
        return `<polygon points="25,15 75,15 50,65" fill="${this.color}" />`;
    }
}

export class Square {
    constructor(color) {
        this.color = color;
    }

    render() {
        return `<rect x="10" y="10" width="70" height="70" fill="${this.color}" />`;
    }
}


  
  
  
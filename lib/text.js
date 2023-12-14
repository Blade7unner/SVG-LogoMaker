module.exports.Text = class Text {
    constructor(content, color, fontSize) {
      this.content = content;
      this.color = color;
      this.fontSize = fontSize;
    }
  
    render() {
      return `<text x="50" y="50" fill="${this.color}" font-size="${this.fontSize}">${this.content}</text>`;
    }
};
  
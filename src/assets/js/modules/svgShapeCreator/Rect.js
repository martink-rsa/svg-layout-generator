/* eslint-disable class-methods-use-this */
/* eslint-disable no-underscore-dangle */
import elementGenerator from '../elementGenerator/elementGenerator';

class Rect {
  constructor({ x = undefined, y = undefined, height = undefined, width = undefined, rx = undefined, ry = undefined, pathLength = undefined }) {
    this.DOMElement = elementGenerator.createElement('rect');
    this.DOMAttributes = {
      x,
      y,
      width,
      height,
      rx,
      ry,
      pathLength,
    };
    this.setAttributes();
  }

  // Set attributes. Check if each is a valid attribute.
  setAttributes() {
    Object.keys(this.DOMAttributes).forEach((key) => {
      const isValidValue = !!this.DOMAttributes[key];
      if (isValidValue) {
        console.log(`KEY/VALUE BEING WRITTEN: ${key} | ${this.DOMAttributes[key]}`);
        this.DOMElement.setAttribute(key, this.DOMAttributes[key]);
      }
    });
  }
}

export default Rect;

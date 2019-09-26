/* eslint-disable class-methods-use-this */
/* eslint-disable no-underscore-dangle */
import { elementGenerator } from '../elementGenerator/elementGenerator';

class Line {
  constructor({ x1, y1, x2, y2, pathLength = undefined }) {
    this.DOMElement = elementGenerator.createElement('line');
    this.DOMAttributes = {
      x1,
      y1,
      x2,
      y2,
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

export { Line };

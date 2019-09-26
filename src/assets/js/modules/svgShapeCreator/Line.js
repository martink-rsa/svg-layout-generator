import { elementGenerator } from '../elementGenerator/elementGenerator';

/* eslint-disable no-underscore-dangle */

class Line {
  constructor({ x1, y1, x2, y2, pathLength = 0}) {
    this.x1 = x1;
    this.y1 = y1;
    this.x2 = x2;
    this.y2 = y2;
    this.pathLength = pathLength;
    this.DOMElement = elementGenerator.createElement({ tag: 'line', x1, y1, x2, y2 });
  }
}

export { Line };
import { elementGenerator } from '../elementGenerator/elementGenerator';

/* eslint-disable no-underscore-dangle */

class Rect {
  constructor({ x1, y1, x2, y2, height, width, rx = 0, ry = 0, pathLength = 0 }) {
    this.x1 = x1;
    this.y1 = y1;
    this.x2 = x2;
    this.y2 = y2;
    this.height = height;
    this.width = width;
    this.rx = rx;
    this.ry = ry;
    this.pathLength = pathLength;
  }
}

export { Rect };

import { elementGenerator } from '../elementGenerator/elementGenerator';

/* eslint-disable no-underscore-dangle */

class Circle {
  constructor({ cx, cy, r, pathLength = 0 }) {
    this.cx = cx;
    this.cy = cy;
    this.r = r;
    this.pathLength = pathLength;
  }
}

export { Circle };

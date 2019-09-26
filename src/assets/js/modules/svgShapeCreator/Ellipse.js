import { elementGenerator } from '../elementGenerator/elementGenerator';

/* eslint-disable no-underscore-dangle */

class Ellipse {
  constructor({ cx, cy, rx, ry, pathLength = 0 }) {
    this.cx = cx;
    this.cy = cy;
    this.rx = rx;
    this.ry = ry;
    this.pathLength = pathLength;
  }
}

export { Ellipse };

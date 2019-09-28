import { elementGenerator } from '../elementGenerator/elementGenerator';

/* eslint-disable no-underscore-dangle */

class Polygon {
  constructor({ points, pathLength = 0 }) {
    this.points = points;
    this.pathLength = pathLength;
  }
}

export { Polygon };

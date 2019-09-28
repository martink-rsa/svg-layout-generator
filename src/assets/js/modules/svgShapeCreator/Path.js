import { elementGenerator } from '../elementGenerator/elementGenerator';

/* eslint-disable no-underscore-dangle */

class Path {
  constructor({ d, pathLength = 0 }) {
    this.d = d;
    this.pathLength = pathLength;
  }
}

export { Path };

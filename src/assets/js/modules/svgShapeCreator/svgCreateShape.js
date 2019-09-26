import { elementGenerator } from '../elementGenerator/elementGenerator';
import { Line } from './Line';

/* eslint-disable no-underscore-dangle */

const svgCreateShape = (() => {
  const createLine = ({ id = '', classes = [], collections = [], x1, y1, x2, y2, pathLength = 0 }) => {
    // Create new line
    // Set id
    // Set classes
    // Set collections
    const newLine = new Line({ x1, y1, x2, y2 });
    if (id) {
      newLine.id = id;
    }
    return newLine;
  };

  return {
    createLine,
  };
})();
export { svgCreateShape };

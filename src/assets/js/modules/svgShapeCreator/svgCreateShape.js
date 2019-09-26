/* eslint-disable no-underscore-dangle */
import { elementGenerator } from '../elementGenerator/elementGenerator';
import { Line } from './Line';

const svgCreateShape = (() => {
  const createLine = ({ id = '', classes = [], collections = [], x1 = undefined, y1 = undefined, x2 = undefined, y2 = undefined, pathLength = undefined }) => {
    // Create new line
    // Set id
    // Set classes
    // Set collections
    console.log('------- svgCreateShape ---');
    if (x1 !== undefined && y1 !== undefined && x2 !== undefined && y2 !== undefined) {
      console.log('-- SHAPE CREATION: Correct parameters passed - Creating new shape');
      const newLine = new Line({ x1, y1, x2, y2, pathLength });
      if (id) {
        newLine.id = id;
      }
      return newLine;
    }
    // Have not dealt with error handling.
    console.log('-- ERROR: INCORRECT VALUES PASSED (svgCreateShape)');
  };

  return {
    createLine,
  };
})();

export { svgCreateShape };
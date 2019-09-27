/* eslint-disable no-underscore-dangle */
import { elementGenerator } from '../elementGenerator/elementGenerator';
import { Line } from './Line';
import { Rect } from './Rect';

const svgCreateShape = (() => {
  const createLine = ({
    x1 = undefined, y1 = undefined, x2 = undefined, y2 = undefined, pathLength = undefined,
  }) => {
    console.log('------- svgCreateShape - createLine()-');
    if (x1 !== undefined && y1 !== undefined && x2 !== undefined && y2 !== undefined) {
      console.log('-- SHAPE CREATION: Correct parameters passed - Creating new line');
      const newLine = new Line({ x1, y1, x2, y2, pathLength });
      return newLine;
    }
    // Have not dealt with error handling.
    console.log('-- ERROR: INCORRECT VALUES PASSED (svgCreateShape)');
  };

  const createRect = ({
    x = undefined, y = undefined, height = undefined, width = undefined, rx = undefined, ry = undefined, pathLength = undefined,
  }) => {
    console.log('------- svgCreateShape - createRect()-');
    if (height !== undefined && width !== undefined) {
      console.log('-- SHAPE CREATION: Correct parameters passed - Creating new rect');
      const newRect = new Rect({ x, y, height, width, rx, ry, pathLength });
      return newRect;
    }
    // Have not dealt with error handling.
    console.log('-- ERROR: INCORRECT VALUES PASSED (svgCreateShape)');
  };

  return {
    createLine,
    createRect,
  };
})();

export { svgCreateShape };

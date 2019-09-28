/* eslint-disable no-console */
/* eslint-disable no-underscore-dangle */
import Line from './Line';
import Rect from './Rect';

const svgCreateShape = (() => {
  const createLine = ({
    x1 = undefined, y1 = undefined, x2 = undefined, y2 = undefined, pathLength = undefined,
  }) => {
    if (x1 !== undefined && y1 !== undefined && x2 !== undefined && y2 !== undefined) {
      const newLine = new Line({ x1, y1, x2, y2, pathLength });
      return newLine;
    }
    // Have not dealt with error handling.
    console.log('-- ERROR: INCORRECT VALUES PASSED (svgCreateShape)');
    return -1;
  };

  const createRect = ({
    x = undefined, y = undefined, height = undefined, width = undefined, rx = undefined, ry = undefined, pathLength = undefined,
  }) => {
    if (height !== undefined && width !== undefined) {
      const newRect = new Rect({ x, y, height, width, rx, ry, pathLength });
      return newRect;
    }
    // Have not dealt with error handling.
    console.log('-- ERROR: INCORRECT VALUES PASSED (svgCreateShape)');
    return -1;
  };

  return {
    createLine,
    createRect,
  };
})();

export default svgCreateShape;

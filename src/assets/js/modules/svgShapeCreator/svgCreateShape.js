import { elementGenerator } from '../elementGenerator/elementGenerator';

/* eslint-disable no-underscore-dangle */

const svgCreateShape = (() => {
  const createLine = ({ id = '', classes = [], x1, y1, x2, y2, height }) => {
    const newLine = elementGenerator.createElement('line', 'line-style-1');
    if (id) {
      newLine.id = id;
    }
    newLine.setAttribute('x1', x1);
    newLine.setAttribute('y1', y1);
    newLine.setAttribute('x2', x2);
    newLine.setAttribute('y2', y2);
    return newLine;
  };

  return {
    createLine,
  };
})();
export { svgCreateShape };

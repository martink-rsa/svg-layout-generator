/* eslint-disable no-underscore-dangle */

import { elementGenerator } from '../elementGenerator/elementGenerator';
import { svgCreateShape } from './svgCreateShape';
import { domController } from '../domController/domController';
import { svgParentsController } from './svgParentsController';
import { SvgParent } from './SvgParent';
import { SvgChild } from './SvgChild';


// #Create object with the SVG Main container being the focus?
// #Add children to an array?

// # Parent SVG is created
// # Parent SVG is appended to Parent SVG Container
// # Line is drawn and appended to Parent SVG
// # Parent SVG is created
// # Parent SVG is appended to Parent SVG Container
// # Circle is draw
// # Parent SVG container adds class to all SVG Parents of X group

// CLASSES WILL BE TRANSFERED AND DEALT WITH AS AN ARRAY

const svgGenerator = (() => {
  const createSvgParent = (id, classes, type) => {
    const newSvgDOMElement = elementGenerator.createElement('svg');
    const newSvgParent = new SvgParent(newSvgDOMElement, id, type, classes);
    newSvgParent.printSvgParent();
    console.log('New Parent Created');
    console.log(newSvgParent);
    return newSvgParent;
  };

  const appendChildToSvgParent = (svgParent, shape) => {
    svgParent.children.push(shape);
    svgParent.DOMElement.appendChild(shape);
  };

  // Steps:
  // 1: Create the Parents container:
  //    svgParentsController.createParentsContainer();
  // 2: Create new parent SVG
  // 3: Draw shape and add it to parent
  // 4: Add new parent SVG to Parents container
  // 5: Append to screen/display element

  const createSVG = () => {
    const mainDisplay = domController.getMainDisplay();

    // Step 1:
    svgParentsController.createParentsContainer();
    // Step 2:
    const svgParent0 = createSvgParent('layout', 'svg-test');
    // Step 3:
    appendChildToSvgParent(svgParent0, svgCreateShape.createLine(100, 100, 700, 100));
    appendChildToSvgParent(svgParent0, svgCreateShape.createLine(700, 100, 700, 700));
    appendChildToSvgParent(svgParent0, svgCreateShape.createLine(100, 700, 700, 700));
    appendChildToSvgParent(svgParent0, svgCreateShape.createLine(100, 100, 100, 700));
    // Step 4:
    svgParentsController.addParentToContainer(svgParent0);
    // Step 5:
    mainDisplay.appendChild(svgParent0.DOMElement);

    // -------

    const svgParent1 = createSvgParent('layout', 'svg-test');
    // Step 3:
    appendChildToSvgParent(svgParent1, svgCreateShape.createLine(200, 200, 600, 200));
    appendChildToSvgParent(svgParent1, svgCreateShape.createLine(600, 200, 600, 600));
    appendChildToSvgParent(svgParent1, svgCreateShape.createLine(200, 600, 600, 600));
    appendChildToSvgParent(svgParent1, svgCreateShape.createLine(200, 200, 200, 600));
    // Step 4:
    svgParentsController.addParentToContainer(svgParent1);
    // Step 5:
    mainDisplay.appendChild(svgParent1.DOMElement);

    svgParentsController.addClassToAllOfType('layout', 'test-line');
  };
  return {
    createSVG,
  };
})();
export { svgGenerator };

/* eslint-disable no-underscore-dangle */

/* ---------- SVG GENERATOR ----------- */

// CLASSES WILL BE TRANSFERED AND DEALT WITH AS AN ARRAY

// Dealing with Filter generation:
// IMPORTANT: NEED TO CREATE SEPERATE CONTAINERS FOR
// FILTERS IF USER WISHES. THIS IS SO FILTERS CAN BE
// REAPPLIED.

// INTENDED PROGRAM FLOW:
// 1. Create Parents SVG Container
//      This will hold parent SVG Objects
// 2. Create new Parent SVG Object
// [NOT DONE]

// ISSUE: 'type' variable name
//            group reserved (SVG uses g)
//            preset reserved (will use for creating preset shapes)
//            style reserved (will use for creating preset shapes)
// USE CASE 1: MAIN LAYOUT. CHILDREN CHANGE STYLE AND ANIMATE
// 1. Create Parents SVG Container
// 2. Create new Parent SVG Object
// 3. Create SVG Shapes with collection 'style-1'

// Steps:
// 1: Create the Parents container:
//    svgParentsController.createParentsContainer();
// 2: Create new parent SVG
// 3: Draw shape and add it to parent
// 4: Add new parent SVG to Parents container
// 5: Append to screen/display element


import { elementGenerator } from '../elementGenerator/elementGenerator';
import { svgCreateShape } from '../svgShapeCreator/svgCreateShape';
import { domController } from '../domController/domController';
import { svgParentsController } from './svgParentsController';
import { SvgParent } from './SvgParent';
import { SvgChild } from './SvgChild';

const svgGenerator = (() => {
  const createSvgParent = (id, classes, type) => {
    const newSvgDOMElement = elementGenerator.createElement('svg');
    const newSvgParent = new SvgParent({
      DOMElement: newSvgDOMElement, id, classes, type,
    });
    return newSvgParent;
  };

  const createSvgChild = (shape) => {
    console.log('========== createSvgChild():');
    return new SvgChild({ DOMElement: shape.DOMElement, DOMAttributes: shape.DOMAttributes });
  };

  const appendChildToSvgParent = (svgParent, shape) => {
    svgParent.children.push(shape);
    console.log(shape);
    svgParent.DOMElement.appendChild(shape.DOMElement);
  };


  const createShape = (tag, attributes) => {
    console.log('========== createShape():   (returns svgChild)');
    let shape = {};
    // Assign the correct shapes to be created
    if (tag === 'line') {
      shape = svgCreateShape.createLine(attributes);
    }
    
    const svgChild = createSvgChild(shape);
    svgChild.DOMAttributes['test'] = '!';
    console.table([shape.DOMAttributes, svgChild.DOMAttributes]);
    console.log({ svgChild });




    return svgChild;
  };

  const createSVG = () => {
    const mainDisplay = domController.getMainDisplay();

    // Step 1:
    svgParentsController.createParentsContainer();
    // Step 2:
    const svgParent0 = createSvgParent('layout');
    // Step 3:
    const line0 = createShape('line', { x1: 111, y1: 111, x2: 777, y2: 777 });
    console.log('------------------------------LINE0');
    console.log(line0);
  
/*     appendChildToSvgParent(svgParent0, svgCreateShape.createLine({ x1: 100, y1: 100, x2: 700, y2: 100 }));
    appendChildToSvgParent(svgParent0, svgCreateShape.createLine({ x1: 700, y1: 100, x2: 700, y2: 700 }));
    appendChildToSvgParent(svgParent0, svgCreateShape.createLine({ x1: 100, y1: 700, x2: 700, y2: 700 }));
    appendChildToSvgParent(svgParent0, svgCreateShape.createLine({ x1: 100, y1: 100, x2: 100, y2: 700 })); */
    // Step 4:
    svgParentsController.addParentToContainer(svgParent0);
    // Step 5:
    mainDisplay.appendChild(svgParent0.DOMElement);

    // -------

    const svgParent1 = createSvgParent('layout');
    // Step 3:
/*     appendChildToSvgParent(svgParent1, svgCreateShape.createLine({ x1: 200, y1: 200, x2: 600, y2: 200 }));
    appendChildToSvgParent(svgParent1, svgCreateShape.createLine({ x1: 600, y1: 200, x2: 600, y2: 600 }));
    appendChildToSvgParent(svgParent1, svgCreateShape.createLine({ x1: 200, y1: 600, x2: 600, y2: 600 }));
    appendChildToSvgParent(svgParent1, svgCreateShape.createLine({ x1: 200, y1: 200, x2: 200, y2: 600 })); */
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

/* OLD COMMENTS: */

// #Create object with the SVG Main container being the focus?
// #Add children to an array?

// # Parent SVG is created
// # Parent SVG is appended to Parent SVG Container
// # Line is drawn and appended to Parent SVG
// # Parent SVG is created
// # Parent SVG is appended to Parent SVG Container
// # Circle is draw
// # Parent SVG container adds class to all SVG Parents of X group


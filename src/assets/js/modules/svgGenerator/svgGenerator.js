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
import domController from '../domController/domController';
import { svgParentsController } from './svgParentsController';
import { SvgParent } from './SvgParent';
import { SvgChild } from './SvgChild';
import Collection from '../Collection/Collection';

const svgGenerator = (() => {

  const createSvgParent = ({ id = undefined, classes = undefined, collections = undefined }) => {
    const newSvgDOMElement = elementGenerator.createElement('svg');
    const newSvgParent = new SvgParent({ DOMElement: newSvgDOMElement, id, classes, collections });
    // newSvgParent.printSvgParent();
    newSvgParent.addId('testID');
    newSvgParent.addClasses(['tc1', 'tc2']);
    newSvgParent.removeClasses(['a']);

    return newSvgParent;
  };

  const createSvgChild = (shape) => {
    console.log('========== createSvgChild():');
    return new SvgChild({ DOMElement: shape.DOMElement, DOMAttributes: shape.DOMAttributes });
  };

  const appendChildToSvgParent = (svgParent, svgChild) => {
    svgParent.children.push(svgChild);
    console.log(svgChild);
    svgParent.DOMElement.appendChild(svgChild.DOMElement);
  };

  const createShape = (tag, attributes) => {
    console.log('========== createShape():   (returns svgChild)');
    let shape = {};
    // Assign the correct shapes to be created
    if (tag === 'line') {
      shape = svgCreateShape.createLine(attributes);
    } else if (tag === 'rect') {
      shape = svgCreateShape.createRect(attributes);
    }
    const svgChild = createSvgChild(shape);
    // console.table([shape.DOMAttributes, svgChild.DOMAttributes]);
    return svgChild;
  };

  const createStyle1 = () => {
    const mainDisplay = domController.getMainDisplay();
    // Step 1: Create Parents Controller
    svgParentsController.createParentsContainer();
    // //-- Repeat here
    // Step 2: Create SVG Parent
    const svgParent0 = createSvgParent({ classes: ['a', 'b', 'c'], collections: ['layout'] });
    // Step 3: Create shape
    const rect0 = createShape('rect', { height: 200, width: 200 });
    // Step 4: Assign shape to Parent
    appendChildToSvgParent(svgParent0, rect0);
    // Step 5: Set Classes

    // Step 6: Add Parent to Parents Controller
    svgParentsController.addParentToContainer(svgParent0);
    // Step 7: Display Parent to Screen
    svgParentsController.appendAllToDisplay(mainDisplay);
    // mainDisplay.appendChild(svgParent0.DOMElement);

    console.log('___COLLECTION TESTS___');

    const collection = new Collection({ collectionAllowDuplicates: false });
    collection.add('test');
    collection.add('test1');
    collection.add('test2');
    collection.add('test3');
    collection.add('test2');
    collection.remove('test1');

    console.log(collection.getCollection());
  };

  const createSVG = () => {
    createStyle1();

  };
  return {
    createSVG,
  };
})();
export { svgGenerator };

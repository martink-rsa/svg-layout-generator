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


import elementGenerator from '../elementGenerator/elementGenerator';
import svgCreateShape from '../svgShapeCreator/svgCreateShape';
import domController from '../domController/domController';
import svgParentsController from './svgParentsController';
import SvgParent from './SvgParent';
import SvgChild from './SvgChild';
import Collection from '../Collection/Collection';
import svgCreateFilter from './svgFilter';

const svgGenerator = (() => {
  const createSvgParent = ({ id = undefined, classes = undefined, collections = undefined }) => {
    const newSvgDOMElement = elementGenerator.createElement('svg');
    const newSvgParent = new SvgParent({ DOMElement: newSvgDOMElement, id, classes, collections });
    return newSvgParent;
  };

  const createSvgFilter = () => {
    // 1: Create Filter Tag
    // 2: Create Filter Child
    svgCreateFilter.createFilter('gaussian');

  };

  const appendChildToSvgParent = (svgParent, svgChild) => {
    svgParent.children.push(svgChild);
    svgParent.DOMElement.appendChild(svgChild.DOMElement);
  };

  const createShape = (tag, attributes) => {
    let shape = {};
    // Assign the correct shapes to be created
    if (tag === 'line') {
      shape = svgCreateShape.createLine(attributes);
    } else if (tag === 'rect') {
      shape = svgCreateShape.createRect(attributes);
    }
    return shape;
  };

  const createSvgChild = ({ tag = 'rect', DOMAttributes, parent = undefined, id = undefined, groups = [], classes = [], collections = [], filters = [] }) => {
    const shape = createShape(tag, DOMAttributes);
    const newSvgChild = new SvgChild({ DOMElement: shape.DOMElement, DOMAttributes: shape.DOMAttributes, parent, id, groups, classes, collections, filters });
    return newSvgChild;
  }; 

  const createStyle4 = () => {
    const mainDisplay = domController.getMainDisplay();
    // Step 1: Create Parents Controller
    svgParentsController.createParentsContainer();
    // //-- Repeat here
    // Step 2: Create SVG Parent
    const svgParent0 = createSvgParent({ classes: ['svg-test'], collections: ['layout'], id: 'main-svg' });
    console.log('-------SVGPARENT-----');
    console.log(svgParent0);

    svgParentsController.addParentToContainer(svgParent0);
    const rectAnimationClasses = ['rect-test-ani-1', 'rect-test-ani-2', 'rect-test-ani-3', 'rect-test-ani-4', 'rect-test-ani-5', 'rect-test-ani-6', 'rect-test-ani-7'];
    let classesIndex = 0;
    const width1 = 50;
    const height1 = 50;
 
    const divWidth = mainDisplay.clientWidth;
    const divHeight = mainDisplay.clientHeight;

    const boxesTotalX = divWidth / width1;
    const boxesTotalY = divHeight / height1;
    
    let xPos;
    let yPos;
    for (let i = 0; i < boxesTotalX; i += 1) {
      if (i === 0) {
        xPos = 0;
      } else {
        xPos = width1 * i;
      }
      for (let j = 0; j < boxesTotalY; j += 1) {
        if (j === 0) {
          yPos = 0;
        } else {
          yPos = height1 * j;
        }
        const rect = createSvgChild({ tag: 'rect', parent: svgParent0, DOMAttributes: { x: xPos, y: yPos, height: height1, width: width1 }, classes: ['rect-test2'], collections: ['ani'] });
        appendChildToSvgParent(svgParent0, rect);
      }
    }

    svgParentsController.appendAllToDisplay(mainDisplay);
    setTimeout(() => {
      svgParentsController.addClassToCollectionDelay(rectAnimationClasses[classesIndex], 'ani', 50);
    }, 100);
    setTimeout(() => {
      svgParentsController.removeClassFromCollectionDelay(rectAnimationClasses[classesIndex], 'ani', 50);
    }, 2500);
    setInterval(() => {
      const currentIndex = classesIndex;
      setTimeout(() => {
        svgParentsController.addClassToCollectionDelay(rectAnimationClasses[currentIndex], 'ani', 50);
      }, 100);
      setTimeout(() => {
        svgParentsController.removeClassFromCollectionDelay(rectAnimationClasses[currentIndex], 'ani', 50);
      }, 2500);
      if (classesIndex === rectAnimationClasses.length - 1) {
        classesIndex = 0;
      } else {
        classesIndex += 1;
      }
      console.log({ classesIndex });
    }, 2500);

  };

  const createStyle3 = () => {
    const mainDisplay = domController.getMainDisplay();
    // Step 1: Create Parents Controller
    svgParentsController.createParentsContainer();
    // //-- Repeat here
    // Step 2: Create SVG Parent
    const svgParent0 = createSvgParent({ classes: ['svg-test'], collections: ['layout'], id: 'main-svg' });
    console.log('-------SVGPARENT-----');
    console.log(svgParent0);

    svgParentsController.addParentToContainer(svgParent0);

    const divWidth = mainDisplay.clientWidth;
    const divHeight = mainDisplay.clientHeight;
    const boxesTotalX = 10;
    const boxesTotalY = 10;
    const width1 = divWidth / boxesTotalX;
    const height1 = divHeight / boxesTotalY;
    let xPos;
    let yPos;
    for (let i = 0; i < boxesTotalX; i += 1) {
      if (i === 0) {
        yPos = 0;
      } else {
        yPos = height1 * i;
      }
      for (let j = 0; j < boxesTotalY; j += 1) {
        if (j === 0) {
          xPos = 0;
        } else {
          xPos = width1 * j;
        }
        const rect = createSvgChild({ tag: 'rect', parent: svgParent0, DOMAttributes: { x: xPos, y: yPos, height: height1, width: width1 }, classes: ['rect-test2'], collections: ['ani'] });
        appendChildToSvgParent(svgParent0, rect);
      }
    }
    // Step 7: Display Parent to Screen
    svgParentsController.appendAllToDisplay(mainDisplay);
    setTimeout(() => {
      svgParentsController.addClassToCollectionDelay('rect-test-animation', 'ani', 50);
    }, 100);
  };

  const createStyle2 = () => {
    const mainDisplay = domController.getMainDisplay();
    svgParentsController.createParentsContainer();
    const svgParent0 = createSvgParent({ classes: ['svg-test'], collections: ['layout'], id: 'main-svg' });
    svgParentsController.addParentToContainer(svgParent0);

    const boxesTotalX = 10;
    const boxesTotalY = 10;
    const width1 = 20;
    const height1 = 20;
    let xPos;
    for (let i = 0; i < boxesTotalX; i += 1) {
      for (let j = 0; j < boxesTotalY; j += 1) {
        if (j === 0) {
          xPos = 0;
        } else {
          xPos = width1 * j;
        }
        const rect = createSvgChild({ tag: 'rect', parent: svgParent0, DOMAttributes: { x: xPos, y: i * 30 + height1 * 2, height: height1, width: width1 }, classes: ['rect-test2'] });
        appendChildToSvgParent(svgParent0, rect);
      }
    }
    // Step 7: Display Parent to Screen
    svgParentsController.appendAllToDisplay(mainDisplay);
  };

  const createStyle1 = () => {
    const mainDisplay = domController.getMainDisplay();
    // Step 1: Create Parents Controller
    svgParentsController.createParentsContainer();
    // //-- Repeat here
    // Step 2: Create SVG Parent
    const svgParent0 = createSvgParent({ classes: ['svg-test'], collections: ['layout'], id: 'main-svg' });
    console.log('-------SVGPARENT-----');
    console.log(svgParent0);

    svgParentsController.addParentToContainer(svgParent0);
    let height1 = '50%';
    let width1 = '33.33%';
    const rect0 = createSvgChild({ tag: 'rect', parent: svgParent0, DOMAttributes: { x: '0', height: height1, width: width1 }, classes: ['rect-test'] });
    const rect1 = createSvgChild({ tag: 'rect', parent: svgParent0, DOMAttributes: { x: '33.33%', height: height1, width: width1 }, classes: ['rect-test'] });
    const rect2 = createSvgChild({ tag: 'rect', parent: svgParent0, DOMAttributes: { x: '66.66%', height: height1, width: width1 }, classes: ['rect-test'] });
    
    const rect3 = createSvgChild({ tag: 'rect', parent: svgParent0, DOMAttributes: { x: '0', y: '50%', height: height1, width: width1 }, classes: ['rect-test'] });
    const rect4 = createSvgChild({ tag: 'rect', parent: svgParent0, DOMAttributes: { x: '33.33%', y: '50%', height: height1, width: width1 }, classes: ['rect-test'] });
    const rect5 = createSvgChild({ tag: 'rect', parent: svgParent0, DOMAttributes: { x: '66.66%', y: '50%', height: height1, width: width1 }, classes: ['rect-test'] });

    appendChildToSvgParent(svgParent0, rect0);
    appendChildToSvgParent(svgParent0, rect1);
    appendChildToSvgParent(svgParent0, rect2);

    appendChildToSvgParent(svgParent0, rect3);
    appendChildToSvgParent(svgParent0, rect4);
    appendChildToSvgParent(svgParent0, rect5);
    // Step 7: Display Parent to Screen
    svgParentsController.appendAllToDisplay(mainDisplay);
    

/*     console.log('___COLLECTION TESTS___');
    const collection = new Collection({ collectionAllowDuplicates: false });
    collection.add('test');
    collection.add('test1');
    collection.add('test2');
    collection.add('test3');
    collection.add('test2');
    collection.remove('test1');
    console.log(collection.getCollection()); */
  };

  const createSVG = () => {
    createStyle4();

  };
  return {
    createSVG,
  };
})();
export { svgGenerator };

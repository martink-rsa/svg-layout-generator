/* eslint-disable no-underscore-dangle */

const svgParentsController = (() => {
  let _svgParents;
  const getSvgParents = () => _svgParents;
  const setSvgParents = (svgParents) => { _svgParents = svgParents; };

  class SvgParents {
    constructor() {
      // Array containing all of the parents
      this.parents = [];
      // Groups of SVGs that can be controlled together
      this.layout = [];
      this.style1 = [];
      this.style2 = [];
      this.style3 = [];
      this.style4 = [];
    }
  }

  const createParentsContainer = () => {
    const newSvgParentsContainer = new SvgParents();
    setSvgParents(newSvgParentsContainer);
  };

  // Adding a parent to the main Parents container
  const addParentToContainer = (parent) => {
    // Get the main Parents container
    const svgParentsContainer = getSvgParents();

    // Get the Type of current parent
    const { type } = parent;

    // Push to the main container.
    svgParentsContainer['parents'].push(parent);

    // --- Adding Parent to specific group
    if (type) {
      // Check if the 'type' given exists',
      //    create it if not.
      const hasTypeProperty = Object.prototype.hasOwnProperty.call(svgParentsContainer, type);
      if (hasTypeProperty) {
        svgParentsContainer[type].push(parent);
      } else {
        console.log('New type created: ' + type);
        svgParentsContainer[type] = [];
        svgParentsContainer[type].push(parent);
      }
    }
    console.log('getSvgParents():');
    console.log(getSvgParents());
  };

  const changeAllStrokesOfType = (type) => {
    const svgParentsContainer = getSvgParents();
    const hasTypeProperty = Object.prototype.hasOwnProperty.call(svgParentsContainer, type);
    if (hasTypeProperty) {
      for (let i = 0; i < svgParentsContainer[type].length; i += 1) {
        console.log(svgParentsContainer[type][i]);
        for (let j = 0; j < svgParentsContainer[type][i].children.length; j += 1) {
          svgParentsContainer[type][i].children[j].style.stroke = 'red';
        }
      }
      console.log(svgParentsContainer[type]);
    } else {
      // Type didn't exist
    }
  };

  const addClassToAllOfType = (type, newClass) => {
    const svgParentsContainer = getSvgParents();
    const hasTypeProperty = Object.prototype.hasOwnProperty.call(svgParentsContainer, type);
    if (hasTypeProperty) {
      for (let i = 0; i < svgParentsContainer[type].length; i += 1) {
        console.log(svgParentsContainer[type][i]);
        for (let j = 0; j < svgParentsContainer[type][i].children.length; j += 1) {
          svgParentsContainer[type][i].children[j].classList.add(newClass);
        }
      }
      console.log(svgParentsContainer[type]);
    } else {
      // Type didn't exist
    }
  };

  return {
    createParentsContainer,
    addParentToContainer,
    changeAllStrokesOfType,
    addClassToAllOfType,
  };
})();
export { svgParentsController };

import SvgParents from './SvgParents';
/* eslint-disable no-underscore-dangle */

const svgParentsController = (() => {
  let _svgParents;
  const getSvgParents = () => _svgParents;
  const setSvgParents = (svgParents) => { _svgParents = svgParents; };
   
  const createParentsContainer = () => {
    const newSvgParentsContainer = new SvgParents();
    setSvgParents(newSvgParentsContainer);
  };

  // Adding a parent to the main Parents container
  const addParentToContainer = (parent) => {
    // Get the main Parents container
    const svgParentsContainer = getSvgParents();
    console.log('------ ADD TO PARENT');
    console.log(parent);
    // Get the Type of current parent
    const { type } = parent;

    // Push to the main container.
    svgParentsContainer['parents'].push(parent);

    // --- Adding Parent to specific group
    if (type) {
      // Check if the 'type' given exists,
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

  const appendAllToDisplay = (display) => {
    console.log('======================================================')
    console.log('====================== APPEND ========================')
    const svgParents = getSvgParents();
    for (let i = 0; i < svgParents.parents.length; i += 1) {
      console.log(svgParents.parents[i].DOMElement);
      display.appendChild(svgParents.parents[i].DOMElement);
    }
  };

  const addClassToCollectionDelay = (classes, collection, delay) => {
    const svgParentsContainer = getSvgParents();
    for (let i = 0; i < svgParentsContainer.parents.length; i += 1) {
      const currentParent = svgParentsContainer.parents[i];
      // Add class to the main parent if it has the collection.
      if (currentParent.collections.includes(collection)) {
        currentParent.DOMElement.classList.add(classes);
        console.log('PARENT HAS COLLECTION');
      } else {
        console.log('PARENT DOES NOT HAVE COLLECTION');
      }
      // Add class to the parent's child if it has the collection:
      for (let j = 0; j < currentParent.children.length; j += 1) {
        const currentChild = currentParent.children[j];
        if (currentChild.collections.includes(collection)) {
          setTimeout(() => {
            currentChild.DOMElement.classList.add(classes);
          }, delay * j);
        } else {
          console.log('CHILD DOES NOT HAVE COLLECTION');
        }
      }
    }
  };

  const removeClassFromCollectionDelay = (classes, collection, delay) => {
    const svgParentsContainer = getSvgParents();
    for (let i = 0; i < svgParentsContainer.parents.length; i += 1) {
      const currentParent = svgParentsContainer.parents[i];
      // Add class to the main parent if it has the collection.
      if (currentParent.collections.includes(collection)) {
        currentParent.DOMElement.classList.remove(classes);
        console.log('PARENT HAS COLLECTION');
      } else {
        console.log('PARENT DOES NOT HAVE COLLECTION');
      }
      // Add class to the parent's child if it has the collection:
      for (let j = 0; j < currentParent.children.length; j += 1) {
        const currentChild = currentParent.children[j];
        if (currentChild.collections.includes(collection)) {
          setTimeout(() => {
            currentChild.DOMElement.classList.remove(classes);
          }, delay * j);
        } else {
          console.log('CHILD DOES NOT HAVE COLLECTION');
        }
      }
    }
  };

  // 1 of 2 Functions used to test concept of collections
  // Outdated and can be deleted, but the code is still
  // very useful.
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

  // 2 of 2 Functions used to test concept of collections
  // Outdated and can be deleted, but the code is still
  // very useful
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
    appendAllToDisplay,
    addClassToCollectionDelay,
    removeClassFromCollectionDelay,
  };
})();
export default svgParentsController;

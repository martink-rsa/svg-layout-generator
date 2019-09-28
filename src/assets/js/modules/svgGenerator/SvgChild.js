/* eslint-disable no-console */
import Svg from './Svg';

class SvgChild extends Svg {
  
  constructor({ DOMElement, DOMAttributes, parent, id = undefined, groups = [], classes = [], collections = [], filters = [] }) {
    super(DOMElement, DOMAttributes, id, classes, collections, filters);
    this.DOMElement = DOMElement;
    this.DOMAttributes = DOMAttributes;
    this.parent = parent;
    this.id = id;
    this.groups = groups;
    this.classes = classes;
    this.collections = collections;
    this.filters = filters;
    this.addId(id);
    this.initClasses(classes);
  }

  printSvgChild() {
    console.log('-_-_-_-_-_-_-_-_-_-_-_-_ Svg Child:');
    console.log('DOMElement:');
    console.log(this.DOMElement);
    console.log(`id: ${this.id}`);
    console.log(`collections: ${this.collections}`);
    console.log(`classes: ${this.classes}`);
    console.log('parent:');
    console.log(this.parent);
    console.log('-_-_-_-_-_-_-_-_-_-_-_-_ Svg Child ////END//// ');
  }
}

export default SvgChild;

/* eslint-disable no-console */
import Svg from './Svg';

class SvgParent extends Svg {
  constructor({ DOMElement, DOMAttributes, id = '', classes = [], collections = [], filters = [] }) {
    super(DOMElement, DOMAttributes, id, classes, collections, filters);
    this.DOMElement = DOMElement;
    this.DOMAttributes = DOMAttributes;
    this.id = id;
    this.classes = classes;
    this.collections = collections;
    this.filters = filters;
    this.children = [];
    this.addId(id);
    this.initClasses(classes);
  }

  
  addChild(newChild) {
    this.children.push(newChild);
  }

  printSvgParent() {
    console.log('-_-_-_-_-_-_-_-_-_-_-_-_ Svg Parent:');
    console.log('DOMElement:');
    console.log(this.DOMElement);
    console.log(`collections: ${this.collections}`);
    console.log(`classes: ${this.classes}`);
    console.log('children:');
    console.log(this.children);
    console.log('-_-_-_-_-_-_-_-_-_-_-_-_ Svg Parent ////END//// ');
  }
}

export default SvgParent;

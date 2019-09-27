/* eslint-disable no-console */
import Svg from './Svg';

class SvgParent extends Svg {
  constructor({ DOMElement, DOMAttributes, id = '', classes = [], filters = [], collections = [] }) {
    super(DOMElement, DOMAttributes, id, classes, filters, collections);
    this.children = [];
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

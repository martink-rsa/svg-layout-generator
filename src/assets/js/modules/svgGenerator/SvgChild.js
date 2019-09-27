/* eslint-disable no-console */
import Svg from './Svg';

class SvgChild extends Svg {
  constructor({ DOMElement, DOMAttributes, parent, id = undefined, groups = [], classes = [], collections = [], filters = [] }) {
    super(DOMElement, parent, DOMAttributes, id, groups, classes, filters, collections);
    this.parent = parent;
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

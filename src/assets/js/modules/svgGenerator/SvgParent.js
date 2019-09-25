/* eslint-disable no-console */
import { Svg } from './Svg';

class SvgParent extends Svg {
  constructor({ DOMElement, id = '', classes = [], type = [] }) {
    super(DOMElement, id, type, classes);
    this.children = [];
  }

  addChild(newChild) {
    this.children.push(newChild);
  }

  printSvgParent() {
    console.log('-_-_-_-_-_-_-_-_-_-_-_-_ Svg Parent:');
    console.log('DOMElement:');
    console.log(this.DOMElement);
    console.log(`type: ${this.type}`);
    console.log(`classes: ${this.classes}`);
    console.log('children:');
    console.log(this.children);
    console.log('-_-_-_-_-_-_-_-_-_-_-_-_Svg Parent ////END//// ');
  }
}

export { SvgParent };

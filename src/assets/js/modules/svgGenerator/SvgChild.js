import { elementGenerator } from "../elementGenerator/elementGenerator";
import { Svg } from "./Svg";

class SvgChild extends Svg {
  constructor({ DOMElement, DOMAttributes = {}, id = '', classes = [], filters = [], collections = [], group = '' }) {
    super(DOMElement, id, classes, filters, collections);
    this.group = group;
    this.DOMAttributes = DOMAttributes;
  }
}

export { SvgChild };

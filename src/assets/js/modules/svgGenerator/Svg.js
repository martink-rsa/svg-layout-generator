class Svg {
  constructor(DOMElement, id = '', classes = [], filters = [], collections = []) {
    this.DOMElement = DOMElement;
    this.id = id;
    this.classes = classes;
    this.filters = filters;
    this.collections = collections;
  }
}

export { Svg };

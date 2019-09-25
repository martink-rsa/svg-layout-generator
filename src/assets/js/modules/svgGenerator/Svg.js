// ADD CLASSES TO CONSTRUCTOR

class Svg {
  constructor(DOMElement, id, type, parentClasses) {
    this.DOMElement = DOMElement;
    this.id = id;
    this.type = type;
    this.classes = parentClasses;
  }
}

export { Svg };

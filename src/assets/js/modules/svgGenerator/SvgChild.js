// ADD CLASSES TO CONSTRUCTOR

class SvgChild {
  constructor(parentClass, type) {
    this.parent = elementGenerator.createElement('svg', parentClass);
    this.type = type;
    this.children = [];
  }

  addChild(newChild) {
    this.children.push(newChild);
  }
}

export { SvgChild };

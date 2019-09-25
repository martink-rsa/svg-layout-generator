class SvgChild {
  constructor(parentClass, type = [], classes = [], group = [], filters = []) {
    this.parent = elementGenerator.createElement('svg', parentClass);
    this.type = type;
    this.classes = classes;
    // Svg inline group <g> tag
    this.group = group;
    // Svg filters to apply
    this.filters = filters;
  }

  addChild(newChild) {
    this.children.push(newChild);
  }
}

export { SvgChild };

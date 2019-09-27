class Svg {
  constructor(DOMElement, id = undefined, classes = [], filters = [], collections = []) {
    this.DOMElement = DOMElement;
    this.id = id;
    this.classes = classes;
    this.filters = filters;
    this.collections = collections;

    this.addId(id);
    this.initClasses(classes);
  }

  addId(id) {
    if (id !== undefined && id !== '') {
      this.id = id;
      this.DOMElement.id = id;
    }
    console.log(this.DOMElement);
  }

  removeId() {
    if (this.DOMElement.hasAttribute('id')) {
      this.DOMElement.removeAttribute('id');
    }
  }

  initClasses(classes) {
    if (classes && classes.length > 0) {
      for (let i = 0; i < classes.length; i += 1) {
        console.log(this.classes);
        this.DOMElement.classList.add(classes[i]);
      }
    }
  }

  addClasses(classes) {
    console.log('ADDING CLASSES AFTER INIT');
    if (classes && classes.length > 0) {
      for (let i = 0; i < classes.length; i += 1) {
        this.classes.push(classes[i]);
        this.DOMElement.classList.add(classes[i]);
      }
    }
    console.log(this.DOMElement);
  }

  removeFromArray(classes, item) {
    return classes.filter((currentItem) => currentItem !== item);
  }

  removeClasses(classesToRemove) {
    let newClasses = this.classes.slice(0);
    if (classesToRemove && classesToRemove.length > 0) {
      for (let i = 0; i < classesToRemove.length; i += 1) {
        this.DOMElement.classList.remove(classesToRemove[i]);
        newClasses = this.removeFromArray(newClasses, classesToRemove[i]);
      }
      this.classes = newClasses;
    }
  }

  addCollections(collections) {
    if (collections && collections.length > 0) {
      for (let i = 0; i < collections.length; i += 1) {
        this.collections.push(collections[i]);
      }
    }
  }

  removeCollections(collectionsToRemove) {
    let newCollections = this.collections.slice(0);
    if (collectionsToRemove && collectionsToRemove.length > 0) {
      for (let i = 0; i < collectionsToRemove.length; i += 1) {
        newCollections = this.removeFromArray(newCollections, collectionsToRemove[i]);
      }
      this.collections = newCollections;
    }
  }
}

export { Svg };

/* eslint-disable no-underscore-dangle */

// A Collection will hold an array of items
// which can have:
//    Items added;
//    Items removed;
//    Return a list of items

class Collection {
  constructor({ collectionAllowDuplicates = false }) {
    this._collection = [];
    this._collectionAllowDuplicates = collectionAllowDuplicates;
  }

  getCollection() { return this._collection; }

  setCollection(newCollection) { this._collection = newCollection; }

  allowDuplicates() { return this._collectionAllowDuplicates; }

  hasDuplicate(item) {
    const collection = this.getCollection();
    if (collection.includes(item)) {
      return true;
    }
    return false;
  }

  // Add items to collection:
  //    No duplicates if _collectionAllowDuplicates is false
  add(item) {
    const collection = this.getCollection();
    if (this.allowDuplicates === true) {
      collection.push(item);
    } else if (!this.hasDuplicate(item)) {
      collection.push(item);
    }
  }

  remove(item) {
    const collection = this.getCollection();
    if (collection.includes(item)) {
      const newCollection = collection.filter((currentItem) => currentItem !== item);
      this.setCollection(newCollection);
    }
  }
}

export default Collection;

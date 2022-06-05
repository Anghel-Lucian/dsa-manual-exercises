class HashTable {
  table = [];

  constructor(items) {
    for(let i = 0; i < items.length; i++) {
      this.table[this.hash(items[i])] = items[i];
    } 
  }

  hash(item) {
    return item;
  }

  get(item) {
    return this.table[this.hash(item)];
  }

  put(item) {
    this.table[this.hash(item)] = item;
  }

  delete(item) {
    this.table[this.hash(item)] = null;
  }
}

const hashTable = new HashTable([1, 4, 5, 1, 2, 6]);

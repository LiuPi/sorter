class Sorter {
  constructor() {
    this.arr = [];
    this.comparator = (a, b) => a - b;
    // your implementation
  }

  add(element) {
    this.arr.push(element);
  }

  at(index) {
    return this.arr[index];
  }

  get length() {
    return this.arr.length;
  }

  toArray() {
    return this.arr;
  }

  sort(indices) {
    indices.sort();
    let q = [];
    for (let i=0; i<indices.length;i++){
      q.push(this.arr[indices[i]]);
    }
    q.sort(this.comparator);
    for(let i=0; i< indices.length; i++){
      this.arr[indices[i]] = q[i];
    }
      q=[];
  }

  setComparator(compareFunction) {
    this.comparator = compareFunction;
  }
}

module.exports = Sorter;
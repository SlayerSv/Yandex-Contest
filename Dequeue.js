class Dequeue {
  dequeue;
  head;
  tail;
  size;

  constructor(capacity = 20) {
    this.dequeue = new Array(capacity);
    this.head = capacity - 1;
    this.tail = 0;
    this.size = 0;
  }

  get length() {
    return this.size;
  }

  pushBack(value) {
    if (this.size === this.dequeue.length) {this.expand();}
    this.dequeue[this.tail] = value;
    this.tail = (this.tail + 1) % this.dequeue.length;
    this.size++;
  }

  pushFront(value) {
    if (this.size === this.dequeue.length) {this.expand();}
    this.dequeue[this.head] = value;
    this.head = (this.head + this.dequeue.length - 1) % this.dequeue.length;
    this.size++;
  }

  popBack() {
    if (this.size === 0) {return undefined;}
    this.tail = (this.tail + this.dequeue.length - 1) % this.dequeue.length;
    this.size--;
    return this.dequeue[this.tail];
  }

  popFront() {
    if (this.size === 0) {return undefined;}
    this.head = (this.head + 1) % this.dequeue.length;
    this.size--;
    return this.dequeue[this.head];
  }

  peekFront() {
    if (this.size === 0) {
      return null;
    }
    return this.dequeue[(this.head + 1) % this.dequeue.length]
  }

  peekBack() {
    if (this.size === 0) {
      return null;
    }
    return this.dequeue[(this.tail + this.dequeue.length - 1) % this.dequeue.length]
  }

  expand() {
    const newDequeue = new Array(this.dequeue.length * 2);
    for (let i = 0; i < this.dequeue.length; i++) {
      this.head = (this.head + 1) % this.dequeue.length;
      newDequeue[i] = this.dequeue[this.head];
    }
    this.dequeue = newDequeue;
    this.head = this.dequeue.length - 1;
    this.tail = this.size;
  }

  getArray() {
    const normalizedArr = [];
    let tmp = this.head;
    for (let i = 0; i < this.size; i++) {
      normalizedArr.push(this.dequeue[++tmp % this.dequeue.length])
    }
    return normalizedArr;
  }
}
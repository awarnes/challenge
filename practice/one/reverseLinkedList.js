/**
 * Create a Node class and a LinkedList class with these methods:

    insertFirst(data)
    insertLast(data)
    getFirst()
    getLast()

    Create a method or function to reverse a given linked list.
 */

class Node {
  constructor(props = {}) {
    const {next, prev, value} = props;

    this.next = next || null;
    this.prev = prev || null;
    this.value = value;
  }
}

class LinkedList {
  first = null;
  last = null;

  insertFirst(value) {
    const newNode = new Node({value});

    if (this.first) {
      const oldFirst = this.first;
      oldFirst.prev = newNode;
      newNode.next = oldFirst;
    } else {
      this.last = newNode;
    }

    this.first = newNode;
  }

  insertLast(value) {
    const newNode = new Node({value});

    if (this.last) {
      const oldLast = this.last;
      oldLast.next = newNode;
      newNode.prev = oldLast;
    } else {
      this.first = newNode;
    }

    this.last = newNode;
  }

  getFirst() {
    return this.first;
  }

  getLast() {
    return this.last;
  }
  // not working :/
  reverse() {
    let prev, next = null;
    let current = this.getFirst();
    while (current) {
      next = current.next;
      current.next = prev;
      current.prev = next;
      prev = current;
      current = next;
    }
    this.first = prev;
  }
}

const apple = new LinkedList();

apple.insertLast('c');
apple.insertLast('d');
apple.insertFirst('b');
apple.insertFirst('a');

console.log(apple);

apple.reverse()

console.log(apple);

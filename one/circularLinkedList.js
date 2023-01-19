// Given a linked list, return true if the list is circular, false if it is not.

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

  deleteAt(value) {
    let curr = this.getFirst();
    for (let i = 0; i <= value; i++) {
      if (i === value) {
        curr.next.prev = curr.prev;
        curr.prev.next = curr.next;
        return;
      }
      curr = curr.next;
    }
  }
}

const circularLinkedList = linkedList => {
  let slow = list.getFirst();
  let fast = list.getFirst();

  while (slow.next && slow.next.next) {
    slow = slow.next;
    fast = fast.next.next;

    if (slow === fast) return true;
  }

  return false;
}
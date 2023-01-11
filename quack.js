/**
 * Question:
 * A quack is a data structure combining properties of both stacks and queues.
 * It can be viewed as a list of elements written left to right such that 
 * three operations are possible:
 * - push(x): add a new item x to the left end of the list
 * - pop(): remove and return the item on the left end of the list
 * - pull(): remove the item on the right end of the list
 * 
 * Implement quack using JS data structures
 * 
 * Bonus: implement the methods such that they take O(1) constant time.
 */

// Simple Quack using built in functions
class Quack {
  constructor(...values) {
    this.values = values;
  };

  // Should be O(n)
  push(value) {
    this.values.unshift(value);
  };

  // Should be O(n)
  pop() {
    return this.values.shift();
  };

  // Should be O(n)
  pull() {
    return this.values.pop();
  };
};

// Fancy (?) Quæck using a doubly linked list

class Node {
  constructor(
    value = null,
    next = null,
    previous = null
  ) {
    this.value = value;
    this.next = next;
    this.previous = previous;
  };
};

class FancyQuack {
  constructor(...values) {
    this.last = null;
    this.first = null;
    this.values = null;
    const nodes = values.map(value => new Node(value))
    this.values = nodes.map((node, index) => {
      if (index === 0) {
        node.previous = null;
        node.next = nodes[index + 1];
        this.first = node;
        return node;
      } else if (index === values.length - 1) {
        node.previous = nodes[index - 1];
        node.next = null;
        this.last = node;
        return node;
      }
      node.previous = nodes[index - 1];
      node.next = nodes[index + 1];
      return node;
    });
  };

  get values() {
    let node = this.first;
    const values = [node.value];
    while (node.next) {
      node = node.next;
      values.push(node.value);
    }
    return values;
  }

  set values(value) {
    return null;
  }

  // Should be O(1)
  push(value) {
    const oldFirst = this.first;
    if (!oldFirst) {
      this.first = new Node(value, null, null);
      this.last = this.first;
    } else {
      this.first = new Node(value, oldFirst, null);
      oldFirst.previous = this.first;
    }
  };

  // Should be O(1)
  pop() {
    const oldFirst = this.first;
    if (oldFirst && oldFirst.next) {
      this.first = oldFirst.next;
      this.first.previous = null;
    } else {
      this.first = null;
      this.last = null;
    }

    return oldFirst.value;
  };

  // Should be O(1)
  pull() {
    const oldLast = this.last;
    if (oldLast && oldLast.previous) {
      this.last = oldLast.previous;
      this.last.next = null;
    } else {
      this.last = null;
      this.first = null;
    }

    return oldLast.value;
  };
};
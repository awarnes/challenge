### Question
What are closures in JS?

### Answer
Closures allow us to specify scope for a given function. They are particularly powerful in writing composable functions that share common code.

A simple example might be some math functions:
```javascript
const add = (a, b) => a + b;
const sub = (a, b) => a - b;
```

Here if we have some generalizable functions that can `add` two numbers and `sub`tract two numbers. What if we had a timer that needed to add or subtract a few different amounts of seconds when buttons are clicked? We could write something like:
```javascript
const add1 = (a) => a + 1;
const add5 = (a) => a + 5;
const add10 = (a) => a + 10;

const sub1 = (a) => a - 1;
const sub5 = (a) => a - 5;
const sub10 = (a) => a - 10;
```
While very simple each of these function definitions is re-implementing the base functionality that we're trying to capture (namely adding and subtracting numbers). If the laws of physics, time, space, and math suddenly changed we might have to come back and reimplement each of these functions!

Using closures we can capture the base implementation and still get the kind of specificity that we might want for each of these 1, 5, 10 buttons:
```javascript
const add = (a) => (b) => a + b;
const sub = (a) => (b) => a - b;
```

Now when we want to specify the amount for each function we can create functions based off of these closures:
```javascript
const add1 = add(1);
const add5 = add(5);
const add10 = add(10);

const sub1 = sub(1);
const sub5 = sub(5);
const sub10 = sub(10);
```

Once defined, we can use them the same way as before but we only have one implementation to manage and update as the fundamental laws of the universe change around us!
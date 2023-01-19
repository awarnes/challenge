### Question:
In React, how do we pass data from a Child to a Parent Component - give an example?

### Answer:
In React we can easily pass data from Parents to Children using `props`. For example, we can pass the state from the `Counter` component to the `CounterDisplay` component:

```javascript
const Counter = () => {
  const [count, setCount] = useState(0);

  return (
    <>
      <button onClick={() => setCount(count + 1)}>+</button>
      <CounterDisplay count={count} />
      <button onClick={() => setCount(count - 1)}>-</button>
    </>
  );
}
```

When we want to send data back to the parent component we can use bound functions that when called on the child will update the data stored as state in the parent. We're already practically doing that above with the `<button />` components. To be more explicit about it, say we have a special component that handles specific styles and such:

```javascript
const Counter = () => {
  const [count, setCount] = useState(0);

  const incrementCount = () => setCount(count + 1);
  const decrementCount = () => setCount(count - 1);

  return (
    <>
      <SpecialButton style='fancy' icon='plus' func={incrementCount} />
      <CounterDisplay count={count} />
      <SpecialButton style='fancy' icon='minus' func={decrementCount} />
    </>
  );
};

const SpecialButton = (props) => {
  const {style, icon, func} = props;

  return (
    <button
      style={style}
      onClick={func}
    >
      <Icon icon={icon}/>
    </button>
  )
};
```

By passing in this function defined in the parent component (often called a `handler`), it can be called in the child component to pass data from the child back up to the parent. In this example we create specific functions to increment and decrement the count.
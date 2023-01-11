### Question:
What are some of the drawbacks (if any) in using this design pattern for nesting React components; and how would you fix it?

```javascript
const App = () => {
  const HostNameField = () => {
    const [value, setValue] = useState('');
    return (
      <>
        <input
          type="text"
          placeholder="Host First Name"
          value={value}
          onChange={e => setValue(e.target.value)}
        />
      </>
    )
  }
  return (
    <>
      <HostNameField/>
    </>
  )
}
```

### Answer:
Defining a component is generally an anti-pattern that will cause bugs. The primary issue is that each time the `App` component is rerendered the `HostNameField` will be re-defined and instantiated meaning that it will lose its state and revert to its base form.

For instance if we had a `button` in the `App` component that incremented a counter. Every time we clicked that button it would reset the state in the `HostNameField`:

```javascript
const App = () => {
  const [thing, setThing] = useState(0);

  const HostNameField = () => {
    const [value, setValue] = useState('');

    return (
      <input value={value} onChange={e=> setValue(e.target.value)} type='text' placeholder='HostFirstName'/>
    )
  };
  return (
    <>
      <button onClick={() => setThing(thing + 1)}>++</button>
      <HostNameField/>
      <p>{thing}</p>
    </>
  );
}
```

In order to solve this we can simply move the definition for the `HostNameField` component outside of the `App` component. This will allow them it to live separately without having to worry about it getting redefined every time we update the `App` component.

```javascript
const HostNameField = () => {
  const [value, setValue] = useState('');

  return (
    <input value={value} onChange={e=> setValue(e.target.value)} type='text' placeholder='HostFirstName'/>
  )
};

const App = () => {
  const [thing, setThing] = useState(0);

  return (
    <>
      <button onClick={() => setThing(thing + 1)}>++</button>
      <HostNameField/>
      <p>{thing}</p>
    </>
  );
}
```
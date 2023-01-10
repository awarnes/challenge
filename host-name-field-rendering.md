### Question:

The HostNameField is a component that is rendered in 2 ways. Explain in detail the differences for each rendering method below; and which one is preferred (Example A | B)?
#### Child Component
```javascript
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
  );
};
```

#### Example A: Render the JSX way
```javascript
const AppA = () => {
  return (
    <>
      <HostNameField/>
    </>
  );
};
```
#### Example B: Call component function directly
```javascript
const AppB = () => {
  return (
    <>
      {HostNameField()}
    </>
  );
};
```

### Answer
At a base level all React components are objects or functions. We can call a function whenever we want to execute the code inside. If, as in this case, the function returns some JSX we can use that to display information on the screen.

One of the fancy things that React adds as a framework is a set of optimized lifecycle methods that help our program manage data and views as efficiently as possible. The child component, `HostNameField`, is making use of the React functionality and lifecycle methods with the `useState('')` hook. Whenever the value in the box is updated we store the state and re-render that specific component with the updated value without having to re-render/calculate the rest of the page.

In order to get access to these lifecycle methods we need to render this component as a React Component with JSX: `<HostNameField />`. When the component is added to the page it will have access to `useState()`, and the React engine will be able to handle it in an optimized way.

If we instead call the `HostNameField()` function, we'll lose access to the lifecycle methods and React won't be able to handle the output in the same way. The `useState('')` interface won't work properly. React will also have a difficult to impossible time optimizing any re-rendering for the output.

In almost every case we would prefer to use Example A with the proper JSX rendering. There are of cases where we may write functions that return JSX that don't need to be components. But those would not be functional components, instead they would be functions that return JSX. For example, we might want a function that helps render a list of lists:

```javascript

const renderUnorderedList = list => (
  <ul>
    {list.map(item => (<li>{item}</li>))}
  </ul>
)
```

This function doesn't need to maintain state or rely particularly heavily on any React lifecylce methods. Instead it will just simply spit out JSX as needed.
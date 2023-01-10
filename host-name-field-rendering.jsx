/**
 * Question:
 * The HostNameField is a component that is rendered in 2 ways.
 * Explain in detail the differences for each rendering method below;
 * and which one is preferred (Example A | B)?
 */

// Child component
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

// Example A: Render the JSX way
const AppA = () => {
  return (
    <>
      <HostNameField/>
    </>
  );
};

// Example B: Call component function directly
const AppB = () => {
  return (
    <>
      {HostNameField()}
    </>
  );
};
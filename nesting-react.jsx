/**
 * Question:
 * What are some of the drawbacks (if any) in using this design pattern
 * for nesting React components; and how would you fix it?
 */

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
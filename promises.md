### Question:
What is a Promise and how does it relate to async/await?

### Answer:

Promises are objects that represent the asynchronous response of a piece of code (it promises to respond at a later point). We generally think of the promise response as either a success or failure. In JavaScript this is represented with either `Promise.resolve()` for success or `Promise.reject()` for failure.

There are two common patterns for using promises in JavaScript today. The first is the classic, original method of promise chaining. When we have a function that will return a promise we can act on the resolved (successful) promise with `.then()` and the rejected (unsuccessful) promise with `.catch()`.

In practice this might look like:
```javascript
  asynchronousRequest()
    .then(response => response.json())
    .catch(error => handleError(error));
```

When this runs the `asynchronousRequest` will eventually either resolve and hit the `.then()` block or be rejected and hit the `.catch()` block. You can chain together many `.then()` and `.catch()` calls together and even mix them up:

```javascript
  asynchronousRequest()
    .then(response => response.json())
    .catch(error => handleConversionError(error))
    .then(json => format(json))
    .then(formattedJson => saveInDatabase(formattedJson))
    .catch(error => handleRemainingErrors(error));
```

The second pattern for handling promises is to use the async/await API. This is a newer pattern in JavaScript that allows us to handle promises more in line with the rest of our code. To use this we can mark a function as an `async` function. This means that we expect to be working with promises in-line. When we have an asynchronous call that we need to make we can then use the `await` keyword to signal to JavaScript that we need to wait for the response before moving forward.

The same kind of functionality as above but using async/await might look like this:
```javascript
const retrieveData = async () => {
  const responseData = await asynchronousRequest();
  if (responseData.error) {
    return handleRequestError(error);
  }

  try {
    return await saveInDatabase(format(responseData.json()));
  } catch (error) {
    return handleRemainingErrors(error);
  }
}
```
The `asynchronousRequest`, `format`, and `saveInDatabase` functions can still return promises, but with async/await we're able to write the code as if it were synchronous which can drastically simplify making sense of it going forward.
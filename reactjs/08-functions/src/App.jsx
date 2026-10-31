const App = () => {
  const showMessage = () => {
    alert('The function was called directly.')
  }

  const greetUser = (name) => {
    alert(`Hello, ${name}!`)
  }

  const handleInput = (event) => {
    console.log('Input value:', event.target.value)
  }

  return (
    <div>
      <h1>Function Calling Examples</h1>

      {/* Pass the function reference. React calls it after the click. */}
      <button id='btn1' onClick={showMessage}>Call a function</button>

      {/* Use an arrow function when arguments must be passed. */}
      <button id='btn2' onClick={() => greetUser('Shivam')}>
        Call with an argument
      </button>

      {/* The event object is passed automatically by React. */}
      <button id='btn3' onClick={(event) => console.log('Clicked:', event.currentTarget)}>
        Read the event object
      </button>

      {/* The function can also be passed directly to an input event. */}
      <input onChange={handleInput} placeholder="Type something" />

      {/* Do not add parentheses here: this would call the function during render. */}
      {/* <button onClick={showMessage()}>Incorrect</button> */}
    </div>
  )
}

export default App

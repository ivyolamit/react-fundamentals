// Basic Forms
// http://localhost:3000/isolated/exercise/06.js

import * as React from 'react'

function UsernameForm({onSubmitUsername}) {
  // 📜 https://reactjs.org/docs/hooks-reference.html#useref
  // 📜 https://reactjs.org/docs/hooks-state.html
  const [usename, setUsername] = React.useState('')

  function handleSubmit(event) {
    event.preventDefault()
    const value = event.target.elements.usernameInput?.value
    onSubmitUsername(value)
  }

  function handleChange(event) {
    const {value} = event.target
    setUsername(value.toLowerCase())
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="usernameInput">Username:</label>
        <input
          id="usernameInput"
          type="text"
          onChange={handleChange}
          value={usename}
        />
      </div>
      <button type="submit">Submit</button>
    </form>
  )
}

function App() {
  const onSubmitUsername = username => alert(`You entered: ${username}`)
  return <UsernameForm onSubmitUsername={onSubmitUsername} />
}

export default App

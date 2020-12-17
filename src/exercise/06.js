// Basic Forms
// http://localhost:3000/isolated/exercise/06.js

import * as React from 'react'

function UsernameForm({onSubmitUsername}) {
  function handleSubmitUsername(e) {
    const username = e.target.elements[0].value
    e.preventDefault()
    onSubmitUsername(username)
  }
  return (
    <form onSubmit={handleSubmitUsername}>
      <div>
        <label>Username:</label>
        <input type="text" />
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

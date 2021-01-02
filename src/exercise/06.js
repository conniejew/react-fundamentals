// Basic Forms
// http://localhost:3000/isolated/exercise/06.js

import * as React from 'react'

function UsernameForm({onSubmitUsername}) {
  const [username, setUsername] = React.useState('')

  function handleSubmitUsername(e) {
    e.preventDefault()
    onSubmitUsername(username)
  }
  function handleChange(e) {
    setUsername(e.target.value.toLowerCase())
  }

  return (
    <form onSubmit={handleSubmitUsername}>
      <div>
        <label>Username:</label>
        <input type="text" onChange={handleChange} value={username} />
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

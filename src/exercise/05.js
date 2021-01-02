// Styling
// http://localhost:3000/isolated/exercise/05.js

import * as React from 'react'
import '../box-styles.css'

function Box({size, ...other}) {
  return <div className={`box box--${size}`} {...other} />
}

function App() {
  return (
    <div>
      <Box
        style={{backgroundColor: 'lightblue', fontStyle: 'italic'}}
        size="small"
      >
        small blue box
      </Box>
      <Box style={{backgroundColor: 'pink', fontStyle: 'italic'}} size="medium">
        medium pink box
      </Box>
      <Box
        style={{backgroundColor: 'orange', fontStyle: 'italic'}}
        size="large"
      >
        large orange box
      </Box>
    </div>
  )
}

export default App

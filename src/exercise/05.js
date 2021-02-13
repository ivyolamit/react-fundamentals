// Styling
// http://localhost:3000/isolated/exercise/05.js

import * as React from 'react'
import '../box-styles.css'


// 🐨 add a style prop to each of them as well so their background color
// matches what the text says it should be as well as `fontStyle: 'italic'`
const smallBox = (
  <div
    className="box box--smal"
    style={{backgroundColor: "lightblue", fontStyle: "italic"}}
    >
      small lightblue box
    </div>
);
const mediumBox = (
  <div
    className="box box--medium"
    style={{backgroundColor: "pink", fontStyle: "italic"}}
    >
      medium pink box
    </div>
);
const largeBox = (
  <div
    className="box box--large"
    style={{backgroundColor: "orange", fontStyle: "italic"}}
    >
      large orange box
    </div>
);

function App() {
  return (
    <div>
      {smallBox}
      {mediumBox}
      {largeBox}
    </div>
  )
}

export default App

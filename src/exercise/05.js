// Styling
// http://localhost:3000/isolated/exercise/05.js

import * as React from 'react'
import '../box-styles.css'

function Box({className = "", style, size, color = "", ...props}) {
  const sizeClassName = size ? `box--${size}` : "";
  return (
    <div
      className={`box ${className} ${sizeClassName}`}
      style={{fontStyle: "italic", backgroundColor: color, ...style}}
      {...props}
    />
  );
}
const smallBox = <Box size="small" color="lightblue">small lightblue box</Box>;
const mediumBox = <Box size="medium" color="pink">medium pink box</Box>;
const largeBox = <Box size="large" color="orange">large orange box</Box>;
const sizelessBox = <Box>sizeless box</Box>;

function App() {
  return (
    <div>
      {smallBox}
      {mediumBox}
      {largeBox}
      {sizelessBox}
    </div>
  )
}

export default App

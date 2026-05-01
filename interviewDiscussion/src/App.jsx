import { useState } from 'react'
import './App.css'

function App() {
  const [value, setValue] = useState(1)
  let multipliedValue = value*5
  
  // We avoid using a separate state for multipliedValue because it can be 
  // derived directly from the 'value' state. React will automatically recalculate 
  // this variable during every re-render whenever 'value' changes.
  // const [multipliedValue, setMultipliedValue] = useState(1)


  const multiplyByFive = ()=>{
    // setMultipliedValue(value*5) // No longer needed since it's derived
    setValue(value+1)
  }

  return (
    <>
      <h1>Main Value: {value} </h1>
      <button onClick={multiplyByFive}>click here to multiply by 5</button>
      <h2>Multiplied Value: {multipliedValue} </h2>
    </>
  )
}

export default App

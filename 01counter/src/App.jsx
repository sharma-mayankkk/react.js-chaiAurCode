import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  // We use the useState hook because normal variables do not trigger a UI re-render when changed.
  // React needs state variables to track data changes and automatically update the DOM (UI) whenever the state is modified.
  let [counter, setCounter] = useState(0)
  // let counter = 5

  const addValue = () => {
    if (counter < 20) {
      setCounter(counter + 1)
    }

  }

  const removeValue = () => {
    if (counter > 0) {
      setCounter(counter - 1)
    }

  }


  return (
    <>
      <h1>Virat Kohli runs</h1>
      <h2>Runs:{counter}</h2>
      <button onClick={addValue}>Increase {counter}</button>
      <br />

      <button onClick={removeValue}>Decrease {counter}</button>

      <p>Counter: {counter}</p>
    </>

  )
}

export default App

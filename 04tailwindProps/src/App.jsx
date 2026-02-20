import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/card'

function App() {
  const [count, setCount] = useState(0)

  const myObj = {
    username: 'viratkohli',
    age: '36'
  }

  return (
    <>
      <h1 className='bg-black p-4 rounded-xl mb-2.5'>TAILWIND TEST</h1>
      <Card name ="Lady gaga" btnTxt="click me"/> 
      <Card name ="Bruno mars" btnTxt='push me'/> 
    </>
  )
}

export default App

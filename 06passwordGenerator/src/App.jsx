import { useCallback, useEffect, useRef, useState } from 'react'

function App() {
  // useState hook is used to manage the state of variables.
  // When these variables change, React re-renders the component to update the UI.
  const [length, setLength] = useState(8)
  const [numberAllowed, setNumberAllowed] = useState(false)
  const [charAllowed, setCharAllowed] = useState(false)
  const [password, setPassword] = useState("")

  // useRef hook is used to persist values between renders without causing a re-render.
  // Here, it's used to get a reference to the password input field for the copy functionality.
  const passwordRef = useRef(null)

  // useCallback hook is used to memoize the function.
  // It ensures that the function is not recreated on every render unless its dependencies change.
  // This is optimized for performance and prevents unnecessary execution in useEffect.
  const passwordGenerator = useCallback(() => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if (numberAllowed) str += '0123456789'
    if (charAllowed) str += '!@#$%^&*-_+=[]{}~`'

    for (let i = 1; i <= length; i++) {
      // Generate a random index based on the string length
      let char = Math.floor(Math.random() * str.length)
      pass += str.charAt(char)
    }

    setPassword(pass)

  }, [length, numberAllowed, charAllowed, setPassword])

  const copyToClipboard = useCallback(()=>{
    // Optional chaining (?.) checks if current is not null before calling select()
    passwordRef.current?.select()
    // Select a range if needed, though select() usually does the whole input
    passwordRef.current?.setSelectionRange(0, 999);
    window.navigator.clipboard.writeText(password) 
  }, [password])

  // useEffect hook runs the code inside it whenever the dependencies in the array change.
  // Here, it calls the password generator whenever length, numberAllowed, or charAllowed changes.
  useEffect(() => {
    passwordGenerator()
  }, [length, numberAllowed, charAllowed, passwordGenerator])

  return (
    <>
      <div className='h-full max-w-md mx-auto shadow-md rounded-lg px-4 py-4 my-8 text-red-500 bg-gray-800'>

        <h1 className='text-white text-center mb-3'>Password Generator</h1>

        <div className='flex shadow rounded-lg overflow-hidden m'>
          <input type="text"
            value={password}
            className="bg-white outline-none w-full py-1 px-3"
            placeholder="Password"
            readOnly
            ref={passwordRef}
          />

          <button className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'
          onClick={copyToClipboard}
          >copy</button>
        </div>

        <div className='flex text-sm gap-x-2'>
          <div className='flex items-center gap-x-1'>
            <input type="range"
              min={6} max={100}
              value={length}
              className='cursor-pointer'
              onChange={(e) => { setLength(e.target.value) }}
            />
            <label>length:{length}</label>
          </div>

          <div className=' flex items-center gap-x-1'>
            <input
              type="checkbox"
              defaultChecked={numberAllowed}
              id='numberInput'
              // Toggle numberAllowed state. Using callback (prev) => !prev ensures we use the latest state.
              onChange={() => {
                setNumberAllowed((prev) => !prev)
              }}
            />
            <label htmlFor="numberInput">Numbers</label>

            <input
              type="checkbox"
              defaultChecked={charAllowed}
              id='charInput'
              onChange={() => {
                setCharAllowed((prev) => !prev)
              }}
            />
            <label htmlFor="charInput">Characters</label>
          </div>

        </div>
      </div>
    </>
  )
}

export default App

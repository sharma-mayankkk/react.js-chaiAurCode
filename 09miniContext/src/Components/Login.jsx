import React, { useState, useContext } from 'react'
import { UserContext } from '../context/UserContextProvider'

function Login() {
    // Local state for the input fields. This state is only relevant to the Login component.
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    // Step 4: Consume the context.
    // The `useContext` hook is the modern way to consume a context value.
    // We pass it the `UserContext` object we created earlier.
    // It returns the `value` that was passed to the Provider.
    // We are destructuring `setUser` from the context value `{ user, setUser }`.
    const { setUser } = useContext(UserContext)

    const handleSubmit = (e) => {
        e.preventDefault()
        // When the form is submitted, we call `setUser` with the username.
        // `setUser` is the function we got from our context.
        // Calling this function will update the `user` state in `UserContextProvider`.
        // This update will cause all components that consume the context (like Profile) to re-render.
        setUser({ username, password })
    }
  return (
    <div>
        <h2>Login</h2>
        <input 
        type='text'
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder='username'  />
        <input 
        type='password'
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder='password'  />
        <button onClick={handleSubmit}>Submit</button>
    </div>
  )
}

export default Login
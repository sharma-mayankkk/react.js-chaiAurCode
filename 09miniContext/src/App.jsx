import { UserContextProvider } from './context/UserContextProvider'
import Login from './Components/login'
import Profile from './Components/Profile'
import './App.css'

function App() {

  return (
    // Step 3: Wrap the component tree with the Provider.
    // By wrapping our main components inside `UserContextProvider`, we make the context
    // (the `user` object and `setUser` function) available to `Login`, `Profile`,
    // and any other component nested inside, no matter how deep they are.
    // This is the "providing" part of the Context API and it helps avoid "prop drilling".
    <UserContextProvider>
      <h1>React Context API</h1>
      <Login />
      <Profile />
    </UserContextProvider>
  )
}

export default App
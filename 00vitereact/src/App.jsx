import Batman from "./batman"

function App() {
  const username = 'brucewayne18'
  return (
    <> {/* We use the fragment element (<>...</>) because a React component must return a single parent element; it allows us to group multiple children without adding extra nodes to the DOM. */}
    
    <h1>Batman is here. username is {username}</h1>
      <Batman />
      <p>My name is Bruce Wayne</p>

    </>
  )
}

export default App

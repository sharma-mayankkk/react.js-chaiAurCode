import Batman from "./batman"

function App() {
  return (
    <> <h1>Batman is here</h1>
      {/* We use the fragment element (<>...</>) because a React component must return a single parent element; it allows us to group multiple children without adding extra nodes to the DOM. */}

      <Batman />
      <p>My name is Bruce Wayne</p>

    </>
  )
}

export default App

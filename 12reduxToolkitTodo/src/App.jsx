import { useState } from 'react'
import AddTodo from './components/AddTodo'
import Todo from './components/Todo'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="w-full max-w-md bg-white shadow-lg rounded-lg p-6">
        <h1 className="text-xl font-bold mb-4">Redux Toolkit</h1>
        <AddTodo />
        <Todo />
      </div>
    </div>
  )
}

export default App

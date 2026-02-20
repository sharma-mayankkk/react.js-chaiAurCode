import { useState } from "react"

function App() {
  const [color, setcolor] = useState('black')

  return (
    <div className="w-full h-screen duration-200" style={{ backgroundColor: color }}>
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-gray-600 px-2 py-1 rounded-4xl">
          <button onClick={()=>{setcolor("red")}} className=" outline-none px-4 py-1 rounded-4xl shadow-4xl text-gray-800" style={{ backgroundColor: 'red'  }}>Red</button>

          <button onClick={()=>{setcolor("green")}} className="outline-none px-4 py-1 rounded-4xl shadow-4xl text-gray-800" style={{ backgroundColor: 'green' }}>Green</button>

          <button onClick={()=>{setcolor("blue")}} className=" outline-none px-4 py-1 rounded-4xl shadow-4xl text-gray-800" style={{ backgroundColor: 'blue' }}>blue</button>

          <button onClick={()=>{setcolor("yellow")}} className=" outline-none px-4 py-1 rounded-4xl shadow-4xl text-gray-800" style={{ backgroundColor: 'yellow' }}>yellow</button>

          <button onClick={()=>{setcolor("pink")}} className=" outline-none px-4 py-1 rounded-4xl shadow-4xl text-gray-800" style={{ backgroundColor: 'pink' }}>pink</button>

          <button onClick={()=>{setcolor("orange")}} className=" outline-none px-4 py-1 rounded-4xl shadow-4xl text-gray-800" style={{ backgroundColor: 'orange' }}>orange</button>
        </div>
      </div>
    </div>
  )
}

export default App

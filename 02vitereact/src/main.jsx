import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

function MyApp(){ 
  return(
    <>
      <h1>This is the custom function..</h1>
    </>
  )
}

//we can also create cusotm element using objects and render it to the page.

// However, this plain object cannot be rendered directly. React's render method expects a valid React Element (created via React.createElement or JSX).
// It checks for specific internal properties (like $$typeof) for security, which this plain object is missing.

// const reactElement = {
//     type: 'a',
//     props: {
//         href: 'https://www.google.com',
//         target: '_blank'
//     },
//     children: 'Click me to visit google.'
// }

const username = ' virat_kohli'
//to create a custom element in react we have to use:
const reactElement = React.createElement(
  'a',
  {href:'https://google.com',target:'_blank'},
  'Gooooogle',

  username // We pass the variable directly to render its value. It is not necessary to be last; the order of arguments determines the order of children.
)

createRoot(document.getElementById('root')).render(
  reactElement //this will be rendered sucessfully.
  // <App/>
)

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Home from './components/home/Home.jsx'
import About from './components/about/about.jsx'
import Layout from './layout.jsx'
import Contact from './components/contact/contact.jsx'
import User from './components/user/User.jsx'
import Github, { githubInfoLoader } from './components/github/Github.jsx'


// There are two ways to create a router. The commented-out code below shows the first way,
// which involves passing an array of route objects to createBrowserRouter.
// While valid, the JSX syntax used later is often preferred for better readability and structure visualization.
// const router = createBrowserRouter([
//   {
//     path: '/',
//     element:<Layout/>,
//     children:[{
//       path:"",
//       element: <Home/>
//     },
//     {
//       path:"about",
//       element:<About/>
//     },
//     {
//       path:'contact',
//       element:<Contact/>
//     }
//   ]
//   }
// ])

// This is the second and currently used way to create a router.
// It uses createRoutesFromElements to allow defining routes using JSX <Route> components.
// This approach is generally considered more readable and easier to manage for complex routing structures.
const router = createBrowserRouter(
  createRoutesFromElements(
    // The parent Route renders the Layout component, which likely contains the Header and Footer.
    // The child routes will be rendered via an <Outlet /> within the Layout component.
    <Route path='/' element={<Layout />}>
      {/* The index route (path='') renders the Home component when the path is exactly '/' */}
      <Route path='' element={<Home />} />
      <Route path='about' element={<About />} />
      <Route path='contact' element={<Contact />} />
      {/* Dynamic route: 'user/:id' captures the ID from the URL and passes it to the User component */}
      <Route path='user/:id' element={<User />} />
      {/* The 'github' route uses a loader function (githubInfoLoader) to fetch data 
          before the Github component renders. This is useful for pre-loading data. */}
      <Route
        loader={githubInfoLoader}
        path='github'
        element={<Github />} />
    </Route>
  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)

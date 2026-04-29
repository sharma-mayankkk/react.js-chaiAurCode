import { useState, useEffect } from "react"
import { useDispatch } from 'react-redux'
import { Outlet } from 'react-router-dom'
import authService from './appwrite/auth'
import { login, logOut } from './store/authSlice'
import { Header, Footer } from "./components"

function App() {
  const [loading, setLoading] = useState(true)
  const dispatch = useDispatch()

  useEffect(() => {
    authService.getCurrentUser()
      .then((userData) => {
        if (userData) {
          dispatch(login({
            userData: {
              $id: userData.$id,
              name: userData.name,
              email: userData.email,
            }
          }))
        } else {
          dispatch(logOut())
        }
      })
      .finally(() => setLoading(false))
  }, [])

  return !loading ? (
    <div className="min-h-screen flex-wrap content-between bg-gray-500">
      <div className="w-full items-center">
        <Header />
        <main>
          <Outlet />
        </main>
        <Footer />
      </div>
    </div>
  ) : (null)
}

export default App
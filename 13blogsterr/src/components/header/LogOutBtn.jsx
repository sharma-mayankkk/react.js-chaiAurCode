import React from 'react'
import { useDispatch } from 'react-redux'
import auth from '../../appwrite/config'
import { logOut } from '../../store/authSlice'
import authService from '../../appwrite/auth'
import Button from '../Button'
 
function LogOutBtn() {
    const dispatch = useDispatch()
    const logoutHandler = () => {
        authService.logout().then(() => {
            dispatch(logOut())
        })
    }
    return (
        <button onClick={logoutHandler} className='inline-block px-6 py-2 duration-200 hover:bg-blue-200 rounded-full' >LogOut</button>
    )
}

export default LogOutBtn
import React from 'react'
import { useDispatch } from 'react-redux'
import auth from '../../appwrite/config'
import { logOut } from '../../store/authSlice'
import authService from '../../appwrite/auth'

function LogOutBtn() {
    const dispatch = useDispatch()
    const logoutHandler = () => {
        authService.logOut().then(() => {
            dispatch(logOut())
        })
    }
    return (
        <div className='inline-block px-6 py-2 duration-200 hover:bg-blue-200 rounded-full'>LogOut</div>
    )
}

export default LogOutBtn
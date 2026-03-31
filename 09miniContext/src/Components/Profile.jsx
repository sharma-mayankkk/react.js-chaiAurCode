import React, { useContext } from 'react'
import { UserContext } from '../context/UserContextProvider'

function Profile() {
    // Step 4 (continued): Consume the context to read data.
    // Again, we use the `useContext` hook to access the shared data.
    // This time, we are destructuring the `user` object from the context value.
    const { user } = useContext(UserContext)
    
    // Now we can conditionally render content based on the `user` state from the context.
    // If `user` is null (the initial state), we show a login message.
    if (!user) return <div>Please login</div>

    // If `user` exists, it means the user has logged in (via the Login component).
    // The `Profile` component automatically re-renders when the `user` state changes in the context,
    // and it will now display the welcome message with the username.
    return <div>Welcome {user.username}</div> 
}

export default Profile
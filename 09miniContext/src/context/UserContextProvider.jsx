import React, { useState, createContext } from "react";

// Step 1: Create the Context using createContext.
// This creates a context object. It comes with a Provider and a Consumer.
// We'll use the Provider here and the `useContext` hook in other components to consume it.
// The default value (`null`) is only used when a component tries to access the context
// without a matching Provider higher up in the component tree.
export const UserContext = createContext(null);

// Step 2: Create a custom Provider component.
// This component will encapsulate the logic for managing and providing the state.
// It takes `children` as a prop, so it can wrap other components.
export const UserContextProvider = ({ children }) => {
    // Inside the provider, we define the state that we want to make available globally.
    // Here, `user` will hold the logged-in user's data, and `setUser` will be the function to change it.
    const [user, setUser] = useState(null);

    // The Provider component from our context (`UserContext.Provider`) is used to pass down the data.
    // The `value` prop is the most important part. Any component that consumes this context
    // will receive this `value`.
    // We are passing an object `{ user, setUser }` so that consuming components can both
    // read the user data and have the ability to update it.
    return (
        <UserContext.Provider value={{ user, setUser }}>
            {children}
        </UserContext.Provider>
    );
};
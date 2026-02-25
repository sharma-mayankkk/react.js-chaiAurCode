import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
function Github() {
    // useLoaderData is a hook that retrieves the data returned by the loader function (githubInfoLoader)
    // defined at the bottom of this file and attached to the route in main.jsx.
    // This allows the data to be pre-fetched before the component even renders.
    const data = useLoaderData()

    // The code below shows the traditional "fetch-on-render" pattern using useEffect.
    // It is commented out because we are using the newer "loader" pattern (fetch-then-render).
    // The loader approach is preferred because it prevents "waterfalls" (waiting for component to load before fetching)
    // and keeps the component code cleaner by removing the need for useEffect and useState for data fetching.
    // const [data, setData] = useState([])
    // useEffect(() => {
    //     fetch('https://api.github.com/users/sharma-mayankkk')
    //         .then(response => response.json())
    //         .then(data => {
    //             console.log(data)
    //             setData(data)
    //         })

    // }, [])
    return (
        <h1 className="text-4xl text-black bg-amber-100">Github Followers:{data.followers}
            <img className="h-50" src={data.avatar_url} alt=" git-pfp" />
        </h1>
    )
}

export default Github

// This asynchronous function fetches the GitHub user data.
// It is exported so it can be used as a 'loader' in the route definition (main.jsx).
export const githubInfoLoader = async () => {
    const response = await fetch('https://api.github.com/users/sharma-mayankkk')
    return response.json()
}

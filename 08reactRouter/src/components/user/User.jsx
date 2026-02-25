import React from "react";
import { useParams } from "react-router-dom";

function User(){
    const {id} = useParams()
    return(
        <div className="bg-pink-400 p-4 text-5xl text-shadow-black">User name is :{id}</div>
    )
}

export default User
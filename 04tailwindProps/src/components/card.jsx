import React from "react"

// 'props' is an object containing data passed from the parent component (App.jsx), allowing this card to display dynamic content.
function Card({name, btnTxt='clickkk'}){ //here we have passed the default value of the btntxt so if anyone who reuse the card component and do not passes the props 0f button text it would read the defalult value 
        console.log(name,btnTxt)
    return(
        <div className="relative h-100 w-75 rounded-md">
        <img
          src="https://images.unsplash.com/photo-1546961329-78bef0414d7c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8VzZXJ8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60"
          alt="AirMax Pro"
          className="z-0 h-full w-full rounded-md object-cover"
        />

        <div className="absolute inset-0 bg-linear-to-t from-gray-900 to-transparent"></div>

        <div className="absolute bottom-4 left-4 text-left">
          <h1 className="text-lg font-semibold text-white">{name}</h1>
          <p className="mt-2 text-sm text-gray-300">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi,
            debitis?
          </p>
          <button className="mt-2 inline-flex cursor-pointer items-center text-sm font-semibold text-white">
            {btnTxt}
          </button>
        </div>
      </div>
    )
}

export default Card
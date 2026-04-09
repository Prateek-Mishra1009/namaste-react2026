import React from "react"
import { useRouteError } from "react-router"

const Error=()=>{

    const error=useRouteError()
    console.log(error)
   return(
    <>
    <h1>Oops !</h1>
    <h2>Something went wrong</h2>
    <h2>{error?.status} : {error.statusText}</h2>
    </>
   )
}

export default Error
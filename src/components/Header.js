import React, { useState ,useEffect} from "react"

import ReactDOM from "react-dom/client"

import { Link } from "react-router-dom";




const Header = () => {


 const [login,setLogin]=useState("login")

 useEffect(()=>{

  console.log("useEffect called in header")
 },[login])

 const handleClick=()=>{

 }

 
  const logOut=()=>{
    console.log("logout is working", )
    if(login==="login"){
      setLogin("logout")
    }
    else{
      setLogin("login")
    }
  }
    return (
      <div className="header">
        <div className="logo-container">
          <img
            className="logo"
            src="https://static01.nyt.com/images/2025/07/25/multimedia/kla-diner-style-burger-fkmj/kla-diner-style-burger-fkmj-mediumSquareAt3X.jpg"
            alt="logo"
          ></img>
        </div>
  
        <div className="nav-items">
          <li >
            <Link to="/">HOME</Link>
            </li>
          <li>
            <Link to="/about">About Us</Link>
            </li>
          <li>
            <Link to="contact">Contact us</Link>
          </li>
          <li>Cart</li>
          <button className="logout" onClick={()=>logOut()}>{login}</button>
        </div>
       
      </div>
    );
  };

  export default Header
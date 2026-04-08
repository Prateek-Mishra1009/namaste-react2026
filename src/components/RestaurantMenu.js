import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import {RES_MENU_URL} from './utils/constants'
import useResMenu from "./utils/useResMenu";
import { useDispatch } from "react-redux";
import { addItem } from "./utils/cartSlice";

const RestaurantMenu = () => {
  const { resId } = useParams();


  console.log(resId);

  const resInfo =useResMenu(resId)

  const dispatch=useDispatch()

  const handleClick=()=>{
    dispatch(addItem("money"))
  }

  return (
    <div className="menu">
      <h1>{resInfo?.name}</h1>
      <h2>Menu</h2>
      {resInfo?.cuisines.map((data,index)=>{
       
       return(
        <>
        <li key={index}>{data}</li>
        <button key={index+100} onClick={handleClick}>Add+</button>
        </>
       )
      })}
      <li>Burger</li>
      
    </div>
  );
};

export default RestaurantMenu;

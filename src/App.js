import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import "./App.css";
import Header from "./components/Header";
import Body from "./components/Body";
import { createBrowserRouter,RouterProvider,Outlet } from "react-router-dom";
import About from "./components/About";
import Error

from "./Error";
import Contact from "./Contact";

const AppLaout = () => {
  return (
    <div className="app">
      <Header />
      <Outlet/>
    </div>
  );
};

const approuter=createBrowserRouter([
  {
    path:'/',
    element:<AppLaout/>,
    children:[
      {
        path:'/',
        element:<Body/>,
      },
      {
        path:'/about',
        element:<About/>,
      },
      {
        path:'/contact',
        element:<Contact/>,
      },
      {
        path:'/restaurants/:resId',
        element:<Contact/>,
      },
    ],
    errorElement:<Error />
    
  }
  
])




const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={approuter} />);


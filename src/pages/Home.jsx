// import { useState } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
import "../App";
// import Card from "../components/card";
import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Preservation from "./Preservation";

// import { div } from "@/components/ui/div";

const Home= ()=>{
  return(
    // <>
    // <div className="">
    //   <h1>Welcome to your Evaheld Legacy Vault, Direk!</h1>
    //   <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. </p>
    // </div>
    // </>
    
    <>
    <div className=" my-[405] ml-[200px] text-justify w-[698] px-4 sm:px-6 lg:px-8">
      <h1 className="text-xl font-bold ">Welcome to your <span className="text-purple-700">Evaheld Legacy Vault</span>, Direk!</h1>
      <p className="text-gray-600 mt-2 text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. </p>
      <div className="grid grid-cols-3 gap-8 mt-6 justify-text ">
        <div className="p-4  border">
          <p className="font-semibold">Legacy Preservation</p>
          <p className="text-sm text-gray-500">Lorem ipsum dolor sit amet.</p>
        </div>
        <div className="p-4 text-center  border gap-[10]">
          <p className="font-semibold">Advance Care Planning</p>
          <p className="text-sm text-gray-500">Lorem ipsum dolor sit amet.</p>
        </div>
        <div className="p-4 text-center  border">
          <p className="font-semibold">My Family Vault</p>
          <p className="text-sm text-gray-500">Lorem ipsum dolor sit amet.</p>
        </div>
      </div>
    </div>
    
      
    </>


    
  )

}

export default Home;
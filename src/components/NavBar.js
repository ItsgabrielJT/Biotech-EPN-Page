import React from 'react'
import logo from "../assets/images/logo.png";

const NavBar = () => {
  return (
    <>
        <div className="navbar bg-primary">
            <div className="flex-1 px-2 lg:flex-none">
                <img className="w-16 h-19" src={logo}></img>
                <a className="text-lg indent-5 font-bold text-neutral-content">Biotech EPN</a>
            </div> 
            <div className="flex justify-end flex-1 px-2">
                <div className="flex items-stretch">                
                    <a href="https://github.com/ItsgabrielJT/Biotech-EPN-Page"><button className="btn btn-secondary text-base-200">GitHub Repository</button></a>
                </div>
            </div>
        </div>
    </>
  )
}

export default NavBar


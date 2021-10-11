import React from "react"
import "./Navbar.css"
import Logo from "../../../assets/images/logo.svg"

export default function Navbar(){
    return(
        <header >
            <div className="content">
                {/*<img src={Logo} className="image" alt="Logo"/>*/}
                <a href="#" className="logo">
                    <span>React</span>Blog
                </a>
                <input type="checkbox" id="menu-bar"></input>
                <label htmlFor="menu-bar" className="fas fa-bars"></label>
                
                <nav className="navbar">
                    <a href="#about">about</a>
                    <a href="#services">Services</a>
                    <a href="#review">Review</a>
                    <a href="#pricing">Pricing</a>
                    <a href="#contact">contact</a>
                    <button >Sign In/Up</button>
                </nav>

            </div>
        </header>
    );
}


import React  from "react"
import "./Navbar.css"

const Navbar= ({ onClick, count }) => {
  return(
      <header >
              {/*<img src={Logo} className="image" alt="Logo"/>*/}
              <a href="#home"  onClick={onClick} className="logo">
                  <span>React</span>Blog
              </a>
              <input type="checkbox"  id="menu-bar"></input>
              <label htmlFor="menu-bar" className="fas fa-bars"></label>
              
              <nav className="navbar">
                  <a href="#about">about</a>
                  <a href="#services">Services</a>
                  <a href="#review">Review</a>
                  <a href="#pricing">Pricing</a>
                  <a href="#contact">contact</a>
                  <a href="#signinup" className="btn" onClick={onClick} >Sign In/Up</a>
              </nav>
      </header>
  );
}
export default Navbar
import React from "react";
import Auth from "../auth/Auth";
import Navbar from "./navbar/Navbar";
import Home from "./home/Home";
import About from "./about/About"
import Services from "./services/Services";

import "./Landing.css"

export default function Landing() {
  return (
        <div>
            <div className="view">
                <Navbar />
                <Home />
            </div>
            <div className="view">
                <About />
            </div>
            <div className="view">
                <Services />
            </div>
        </div>
  );
}

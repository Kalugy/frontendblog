import React from "react";
import Navbar from "../components/navbar/Narbar.jsx";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Header from "../components/header/Header";
import Auth from "../components/auth/Auth";
import Home from "../components/home/Home";
import Services from "../components/services/Services";

import "./test.css"

export default function App() {
  return (
      <Router>
        <div className="main">
        <Navbar />
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/services">
            <Services />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route path="/join-us">
            <Auth />
          </Route>
          <Route path="/sign-in">
            <SignIn />
          </Route>
          <Route path="/">
            <div>
            <Home />
            <Services />
            </div>
          </Route>
        </Switch>
        </div>
      </Router>
  );
}

function About() {
  return <h2>About</h2>;
}
function Contact() {
  return <h2>Contact</h2>;
}
function SignUp() {
  return <h2>SignUp</h2>;
}
function SignIn() {
  return <h2>SignIn</h2>;
}
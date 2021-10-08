import React from "react";
import Navbar from "../components/navbar/Narbar.jsx";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Header from "../components/header/Header";
import Auth from "../components/auth/Auth";

export default function App() {
  return (
      <Router>
        <Navbar/>
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
            <Header />
          </Route>
        </Switch>
      </Router>
  );
}

function Home() {
  return <h2>Home</h2>;
}
function About() {
  return <h2>About</h2>;
}
function Services() {
  return <h2>Services</h2>;
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
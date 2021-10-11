import React,{useState} from "react";
import Navbar from "./navbar/Navbar";
import Auth from "../auth/Auth";
import Home from "./home/Home";
import About from "./about/About"
import Services from "./services/Services";
import Review from "./review/Review";
import Pricing from "./pricing/Pricing";
import Contact from "./contact/Contact";
import "./Landing.css"

const ChildComponent = ({ onClick, count }) => {
    return (
        <button onClick={onClick}>
           Click me {count}
        </button>
      )
  };

 

export default function Landing() {

    const [count, setCount] = useState(false);
    const toggleShow = () => {
      setCount(!count)
    }
    return (
        <div>
            
            <div className="view">
                
                <div >
                     <Navbar onClick={toggleShow} count={count}/>
                    {count === false &&
                     <Home />
                    }
                    {count === true &&
                     <Auth />
                    }
                </div> 
                
            </div>
            
            
            {/**
            <div className="view">
                <About />
            </div> 
            <div className="view">
                <Services />
            </div>
            <div className="view">
                <Review />
            </div>
            <div className="view">
                <Pricing />
            </div>
            <div className="view">
                <Contact />
            </div>
            <a onClick={test} className="arrow-up" >
                <span className="fa-stack">
                    <i className="fa fa-circle fa-stack-2x"></i>
                    <i className="fa fa-arrow-up fa-stack-1x fa-inverse"></i>
                </span>
            </a>
            */}
        </div>
  );
}

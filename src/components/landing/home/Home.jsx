import React from "react";
import "./Home.css"
import HomeImage from "../../../assets/images/landingPage/home-img.png"
export default function Home(){
    return(
        <section className="section-home">
            <div className="home"> 
             
                <div className="content">
                    <h1>Blog React </h1>
                    <h2>Front End </h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus suscipit porro nam libero natus error consequatur sed repudiandae eos quo?</p>
                    <a href="/about-us" className="btn">Blog</a>
                </div>
 
                <div className="image">
                    
                    <img src={HomeImage} alt=""/> 
                </div>
             
            </div>
            
        </section>
    );
}
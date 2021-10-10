import React from "react"
import "./About.css"
import AboutImage from "../../../assets/images/landingPage/about-img.png"

export default function About(){
    return(
        <section className="section-about">
            
            <div className="about"> 
                <h1 className="title">About Us</h1>
                <div className="content">
                    <div className="image2">
                        <img src={AboutImage} alt=""></img>
                    </div>
                    <div className="">
                        <h3>Easy and confortable to use</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt at amet nulla, laborum doloribus distinctio maxime alias aliquid exercitationem perferendis. Error corrupti itaque veritatis fugit? Magnam facere aperiam minima minus?</p>
                        <button className="btn">hello1</button>
                        <button className="btn">hello1</button>
                    </div>
                </div>
            </div>
        </section>
    );
}

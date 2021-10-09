import React from "react";
import "./Home.css"

export default function Home(){
    return(
        <section>
            <div className="home">
                <div className="content">
                    <h3>best mobile app <span>showcase</span></h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus suscipit porro nam libero natus error consequatur sed repudiandae eos quo?</p>
                    <a href="#" className="btn">download now</a>
                </div>

                <div className="image">
                    <img src="images/home-img.png" alt=""/>
                </div>
            </div>
        </section>
    );
}
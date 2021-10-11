import React from "react";
import "./Review.css"
import Person1 from "../../../assets/images/landingPage/pic1.png"
import Person2 from "../../../assets/images/landingPage/pic2.png"
import Person3 from "../../../assets/images/landingPage/pic3.png"

export default function Review(){
    return(
        <section>
            <div className="review" id="review">
                <h1 className="heading">Our Clients</h1>
                <div className="box-container">
                    
                    <div className="box">
                        <img src={Person1} alt=""/>
                        <h5>Angelica Jones</h5>
                        <div className="stars">
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                        </div>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eveniet quas perspiciatis aliquam maxime eius quibusdam sequi sint quidem. Voluptates, doloremque? Provident sit repellendus nesciunt. Dolorum enim autem aperiam. Sapiente, dolor.</p>
                    </div>
                    <div className="box">
                        <img src={Person2} alt=""/>
                        <h5>Jerson Jones</h5>
                        <div className="starts">
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star-half-alt"></i>
                        </div>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eveniet quas perspiciatis aliquam maxime eius quibusdam sequi sint quidem. Voluptates, doloremque? Provident sit repellendus nesciunt. Dolorum enim autem aperiam. Sapiente, dolor.</p>
                    </div>
                    <div className="box">
                        <img src={Person3} alt=""/>
                        <h5>Canes Jones</h5>
                        <div className="starts">
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="far fa-star"></i>
                        </div>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eveniet quas perspiciatis aliquam maxime eius quibusdam sequi sint quidem. Voluptates, doloremque? Provident sit repellendus nesciunt. Dolorum enim autem aperiam. Sapiente, dolor.</p>
                    </div>
                </div>
            </div>
        </section>
    );
}
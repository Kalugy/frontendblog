import React from "react";
import "./Services.css"
import ImagenIcon1 from "../../../assets/images/landingPage/f-icon1.png";
import ImagenIcon2 from "../../../assets/images/landingPage/f-icon2.png";
import ImagenIcon3 from "../../../assets/images/landingPage/f-icon3.png";



export default function Services(){
    return(
        <section>
            <div className="services" id="services">
                <h1 className="heading"> Services </h1>
                <div className="box-container">
                    
                    <div className="box">
                        <img src={ImagenIcon1} alt=""/>
                        <h3>amazing UI design</h3>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ullam minus recusandae autem, repellendus fugit quaerat provident voluptatum non officiis ratione.</p>
                        <a href="#" className="btn">read more</a>
                    </div>

                    <div className="box">
                        <img src={ImagenIcon2} alt=""/>
                        <h3>soft and smooth animations</h3>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ullam minus recusandae autem, repellendus fugit quaerat provident voluptatum non officiis ratione.</p>
                        <a href="#" className="btn">read more</a>
                    </div>

                    <div className="box">
                        <img src={ImagenIcon3} alt=""/>
                        <h3>freindly interactions</h3>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ullam minus recusandae autem, repellendus fugit quaerat provident voluptatum non officiis ratione.</p>
                        <a href="#" className="btn">read more</a>
                    </div>

                    </div>

            </div>
        </section>
    );
}
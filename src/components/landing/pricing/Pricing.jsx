import React from "react";
import "./Pricing.css"

export default function Pricing(){
    return(
        <section>
            <div className="pricing" id="pricing">
                <h1 className="heading">Pricing</h1>
                <div className="box-container">
                    
                    <div className="box">
                        <h5>Angelica Jones</h5>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eveniet quas perspiciatis aliquam maxime eius quibusdam sequi sint quidem. Voluptates, doloremque? Provident sit repellendus nesciunt. Dolorum enim autem aperiam. Sapiente, dolor.</p>
                    </div>
                    <div className="box">
                        <h5>Jerson Jones</h5>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eveniet quas perspiciatis aliquam maxime eius quibusdam sequi sint quidem. Voluptates, doloremque? Provident sit repellendus nesciunt. Dolorum enim autem aperiam. Sapiente, dolor.</p>
                    </div>
                    <div className="box">
                        <h5>Canes Jones</h5>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eveniet quas perspiciatis aliquam maxime eius quibusdam sequi sint quidem. Voluptates, doloremque? Provident sit repellendus nesciunt. Dolorum enim autem aperiam. Sapiente, dolor.</p>
                    </div>
                </div>
            </div>
        </section>
    );
}
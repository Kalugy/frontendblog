import React from "react";
import "./Footer.css"

export default function Footer(){
    return(
        <div class="footer">
            <div class="box-container">
                <div class="box">
                    <h3>React Blog</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet pariatur rerum consectetur architecto ad tempora blanditiis quo aliquid inventore a.</p>
                </div>
                <div class="box">
                    <h3>quick links</h3>
                    <a href="#">home</a>
                    <a href="#about">about</a>
                    <a href="#services">services</a>
                    <a href="#review">review</a>
                    <a href="#pricing">pricing</a>
                    <a href="#contact">contact</a>
                </div>
                <div class="box">
                    <h3>follow us</h3>
                    <a href="#">facebook</a>
                    <a href="#">instagram</a>
                    <a href="#">pinterest</a>
                    <a href="#">twitter</a>
                </div>

                <div class="box">
                    <h3>contact info</h3>
                    <div class="info">
                        <i class="fas fa-phone"></i>
                        <p> +123-456-7890 <br /> +111-2222-333 </p>
                    </div>
                    <div class="info">
                        <i class="fas fa-envelope"></i>
                        <p> example@gmail.com <br /> example@gmail.com </p>
                    </div>
                    <div class="info">
                        <i class="fas fa-map-marker-alt"></i>
                        <p> mumbai, india - 400104 </p>
                    </div>
                </div>
            </div>
        <h1 class="credit"> &copy; copyright @ 2021 by Kalugy </h1>
        </div>
    );
}
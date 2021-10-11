import React from "react"
import "./Contact.css"
import ContactImage from "../../../assets/images/landingPage/contact-img.png"

export default function Contact(){
    return(
        <section>
            <div className="contact" id="contact">
                <div>
                    <img src={ContactImage}></img> 
                </div>
                <div>
                    <form className="form">
                        <h3>Contact</h3>
                        <input type="text" placeholder="Name"></input>
                        <input type="text" placeholder="Email"></input>
                        <input type="text" placeholder="Phone"></input>
                        <input type="text" placeholder="message"></input>
                        <button>Send</button>
                     </form> 
                </div>
               
            </div> 
        </section>
    );
}
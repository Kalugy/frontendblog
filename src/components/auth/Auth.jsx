import React from "react";
import SignIn from "./signIn/SignIn"
import JoinUs from "./joinUs/JoinUs"
import "./Auth.css"
import LogInImage from "../../assets/images/log.svg"
import SignInImage from "../../assets/images/register.svg"
;


function handleSignUp(){
    const container = document.querySelector(".container");
    container.classList.remove("sign-up-mode");
} 

function handleSignIn(){
    const container = document.querySelector(".container");
    container.classList.add("sign-up-mode");
} 

export default function Auth(){
    return (
        <div>
            <div className="container">
                <div className="forms-container">
                    <div className="signin-signup">
                        <JoinUs/>
                        <SignIn/>
                    </div>
                </div>
                <div className="panels-container">
                    <div className="panel left-panel">
                        <div className="content">
                            <h3>New Here?</h3>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi eaque officiis 
                                facilis commodi, beatae quidem deleniti ea dignissimos iure eos magni porro possimus ex perferendis id ratione iste asperiores. Repudiandae?
                            </p>
                            <button className="btn transparent" id="sign-up-btn" onClick={handleSignIn}>
                                Sign up
                            </button>
                            <img src={LogInImage} className="image" alt=""></img>
                        </div>
                    </div>
                    <div className="panel right-panel">
                        <div className="content">
                            <h3>One of Us?</h3>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi eaque officiis 
                                facilis commodi, beatae quidem deleniti ea dignissimos iure eos magni porro possimus ex perferendis id ratione iste asperiores. Repudiandae?
                            </p>
                            <button className="btn transparent" id="sign-up-btn" onClick={handleSignUp}>
                                Sign In
                            </button>
                            <img src={SignInImage} className="image" alt="" ></img>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
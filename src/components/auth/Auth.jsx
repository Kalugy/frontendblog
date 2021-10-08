import React from "react";
import SignIn from "./signIn/SignIn"
import JoinUs from "./joinUs/JoinUs"
import "./Auth.css"
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
            </div>
        </div>
    )
}
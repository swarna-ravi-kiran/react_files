// import mycontext from "../contextapi/ContextApi";
import React from "react";
import "./Nav.css"
import { useContext } from "react";
import context from "../login-logout-task/CredentialContext";
function Nav(){
    // let data = useContext(mycontext)
    var {state,setState} =  useContext(context)
    return (
        <div className = "Nav">
            <div className = "Title">
               <h2>E Commerce Application</h2>
            </div>

            <div className = "Menu">
                <a href="">Home</a>
                <a href="">Products</a>
                <a href="">Profiles</a>
                <a href="">Support</a>
                {state ? null : <button onClick={ ()=>{setState(true)}}>Logout</button> }
            </div>
        </div>
    )
}

export default Nav;
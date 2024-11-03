import React, { useState } from "react";
import { useContext } from "react";
import context from "./CredentialContext";
import Nav from "../nav/Nav";
function Login(){
         var {setState} = useContext(context)
         var [login,setLogin] = useState({
            name:"",
            password:""
         })
         const checkedvalue = ()=>{
            debugger
           if(login.name === "swarna" && login.password === "swarna@123"){
           setState(false)
        }else{
            alert("please enter  valid credentails")
        }
           }

    return(
        <div style={{width:"300px",boxShadow:"0px 0px 10px",padding:"50px", margin:"100px auto",textAlign:"center"}}>
            <h2>Login Form</h2>
            <div>
                <input type="text" placeholder="User name" onChange={(e)=>{setLogin({...login,name:e.target.value})}}></input><br></br>
            </div>
            <br></br>
            <div>
                <input type="password" placeholder="password" onChange={(e)=>{setLogin({...login,password:e.target.value})}}></input><br></br>
            </div>
            <br></br>
            <button onClick={checkedvalue}>Login</button>
        </div>
    )
}

export default Login
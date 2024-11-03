import {useContext} from "react";
import Home from "./Home";
import Login from "./Login";
import context from "./CredentialContext";
import Nav from "../nav/Nav";


function LoginMain(){
   const {state} = useContext(context)
return(
   <div>
    {state ? <Login />
    :
    <Home/>
       }   </div> 
)
}

export default LoginMain
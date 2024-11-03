import React from "react";
import { useState } from "react";
import Text from "./Text";
function Input(){
    const [state,setstate] = useState("")
    const getData = (event)=>{
          setstate(event.target.value)
    }
    return (
        <div>
            <h2>Input Component</h2>
            <label>Enter Text</label> :
            <input type="text" onChange={getData}></input> <br></br>
             <br></br>
            <hr></hr>
            <Text information = {state}/>
        </div>
    )
}

export default Input
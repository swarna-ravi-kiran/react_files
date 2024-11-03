import React from "react";
import Child from "./Child";
import { useState } from "react";
function Parent(){
    const [state,setstate] = useState("default data")
  return (
    <div>
        <h2>
            parent component
        </h2>
        <Child info={state}/>        
    </div>
  )
}

export default Parent
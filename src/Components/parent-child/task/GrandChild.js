import React from "react";

function GrandChild(props){  //props ={information:"swarna ravi"}
return(
    <div>
        <h2>Grand Child</h2>
        <p>{props.data}</p>
    </div>
)
}

export default GrandChild
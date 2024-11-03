import React from "react";
import GrandChild from "./GrandChild";

function Text(props){  //props ={information:{state}}
return(
    <div>
        <h2>Text Component</h2>
        <p>{props.information}</p> <br></br>
        <br>
        </br>
        <hr></hr>
        <GrandChild data={props.information}/>
    </div>
)
}

export default Text 